from lxml import html
import json
import re


def XPathExtraction(input, pageType):
    # Form an XML tree using lxml library
    tree = html.fromstring(input)

    data = {}
    id = 1

    # overstock regeXPathx extraction
    if pageType == 0:

        objects = tree.xpath('//tbody/tr[(contains(@bgcolor, "#ffffff") or contains(@bgcolor, "#dddddd")) and count(td[@valign="top"]) = 2]/td[2]')
        for obj in objects:
            item = {}
            title = obj.xpath('string(a/b/text())')
            listPrice = obj.xpath('string(table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/s/text())')
            price = obj.xpath('string(table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/span/b/text())')
            saving = obj.xpath('substring-before(table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span/text(), " ")')
            savingPercent = obj.xpath('substring(substring-after(table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span/text(), " "),2 ,3)')
            content = obj.xpath('string(table/tbody/tr/td[2]/span/text())')

            item['Title'] = title
            item['listPrice'] = listPrice
            item['price'] = price
            item['saving'] = saving
            item['savingPercent'] = savingPercent
            item['content'] = content
            data[id] = item
            id += 1
    elif pageType == 1:
        # rootObject = tree.xpath('//div[@class="news-container blue article-old article-type-1"]/div')[0]
        rootObject = tree.xpath('//div[contains(@class, "news-container")]/div')[0]
        author = rootObject.xpath('string(div[@class="article-meta"]/div[@class="author"]/div/text())')
        publishTime = rootObject.xpath('string(div[@class="article-meta"]/div[@class="publish-meta"]/text())')
        title = rootObject.xpath('string(header/h1/text())')
        subTitle = rootObject.xpath('string(header/div[@class="subtitle"]/text())')
        lead = rootObject.xpath('string(header/p/text())')
        contentList = rootObject.xpath('div[@class="article-body"]/article[@class="article"]//p | '
                                       'div[@class="article-body"]/article[@class="article"]//strong')

        content = ""

        for p in contentList:
            if p.text is not None:
                content += '\n' + p.text

                if p.tail is not None:
                    content += '\n' + p.tail

        item = {}
        item['Title'] = title
        item['SubTitle'] = subTitle
        item['Lead'] = lead
        item['Author'] = author
        item['PublishTime'] = re.sub('[^A-Za-z0-9.: ]+', '', publishTime)   # removes escape characters from datetime
        item['content'] = content
        data[id] = item
        id += 1

    elif pageType == 2:                       # custom
        return "To be implemented"
    else:
        return "Unknown pageType"

    # return json dump with pretty print + sorted entries
    return json.dumps(data, indent=4, sort_keys=True, ensure_ascii=False)
