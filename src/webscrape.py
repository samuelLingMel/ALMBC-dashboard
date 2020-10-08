import requests
from bs4 import BeautifulSoup

# trying to webscrape the document with the information

dashboard_url = 'https://docs.google.com/spreadsheets/d/1-SXxNQAJl8KCIwU-IQyAuu3R8MW6IL6K425pYfgdvjg/edit#gid=575064376'

headers = {"User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36'}

almbc_dashboard = requests.get(dashboard_url, headers=headers)

almbc_soup = BeautifulSoup(almbc_dashboard.content, 'html.parser')

info = almbc_soup.findAll("div", {"class":"grid-table-container"})


print(info)