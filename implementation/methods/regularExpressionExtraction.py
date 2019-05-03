import re
import json
import lxml


def regularExpressionExtraction(input, pageType):
    data = {}
    id = 1
    # print(input)

    if pageType == 0:               # overstock regex extraction
        regex = r'<b>([0-9].+)<\/b>.*\n.*\n.*<s>([\$0-9,.]+).*\n.*<b>([\$0-9.]+).*\n.*>([\$0-9.,]+)\s.([0-9]+.)' \
                r'.*\n.*\n.*<span class=\"normal\">(.*|.*\n.*\n.*|.*\n.*\n.*\n.*)<br\/><a'
    elif pageType == 1:             # rtvslo.si regex extraction
        regex = r'<h1>(.*)<\/h1>[\s\S]+<div class=\"subtitle\">(.*)<\/div>[\s\S]+<p class=\"lead\">(.*)<\/p>[\s\S]+' \
                r'<div class=\"author-name\">(.*)<\/div>[\s\S]+\"publish-meta\">[\n\W]+(.*)<br\/>[\s\S]+<\/div>[\n]*' \
                r'<\/figure>[\n]*<p([\s\S]*.*)<div class=\"gallery\">'
    elif pageType == 2:             # newegg.com regex extraction
        regex = r'<div class=\"item-container\">(?:\n.*){,15}(?:rating-(\d).*(?:\n.*){,4})?Details\">(?:<i.*<\/i>)?' \
                r'((?:.*\n){,5})<!--p.*\n.*>(?:.*<\/i>)?(.*)<\/p>(?:\n.*){,13}s\">(\n.*)?(?:\n.*){,9}(\$).*>' \
                r'([0-9]?\,?[0-9]{2,}).*>(\.\d\d)(?:[^(]*\(([\d]{1,}.*)\).*)?(?:(?:\n.*){,9}\n)?(?:.*>([0-9]{,2}\%))?'
    else:
        return "No regex specified!"

    matches = re.finditer(regex, input)
    for match in matches:
        # save retrieved data into dictionary
        item = {}

        if pageType == 0:                       # overstock
            title = match.group(1)              # title
            listPrice = match.group(2)          # listPrice
            price = match.group(3)              # price
            saving = match.group(4)             # saving
            savingPercent = match.group(5)      # saving %
            content = match.group(6)            # content

            item['Title'] = title
            item['listPrice'] = listPrice
            item['price'] = price
            item['saving'] = saving
            item['savingPercent'] = savingPercent
            item['content'] = content

        elif pageType == 1:                     # rtvslo.si
            title = match.group(1)              # title
            subTitle = match.group(2)           # subTitle
            lead = match.group(3)               # lead
            author = match.group(4)             # author
            publishTime = match.group(5)        # publishTime
            content = match.group(6)            # content

            item['Title'] = title
            item['SubTitle'] = subTitle
            item['Lead'] = lead
            item['Author'] = author
            item['PublishTime'] = publishTime
            item['content'] = str(lxml.html.fromstring(content).text_content()).replace('>', '')\
                                                                               .replace('class=\"Body\"', '')

        elif pageType == 2:                     # newegg

            rating = match.group(1)             # rating
            title = match.group(2)              # title
            promo = match.group(3)              # promo
            oldPrice = match.group(4)           # oldPrice
            price = str(match.group(5)) + \
                    str(match.group(6)) + \
                    str(match.group(7))              # price
            offers = match.group(8)             # offers
            save = match.group(9)               # save

            item['Rating'] = rating
            item['Title'] = title.replace('</a>\n', '').replace('</i>', '')
            item['Promo'] = promo
            item['OldPrice'] = oldPrice.replace('</li>', '').replace('\n', '').replace(' ', '')
            item['Price'] = price
            item['Offers'] = offers
            item['Save'] = "" if save is None else save
        else:
            return "Unknown pageType"

        # store item in dictionary
        data[id] = item
        id += 1

    # return json dump with pretty print + sorted entries
    return json.dumps(data, indent=4, sort_keys=True, ensure_ascii=False)
