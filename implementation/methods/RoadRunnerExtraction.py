from bs4 import BeautifulSoup

def RoadRunnerExtraction(page1, page2, pageType):
    htmlObject = open(page1, 'rb') if pageType == 1 or 2 else open(page1, 'r')
    html1 = htmlObject.read()

    htmlObject = open(page2, 'rb') if pageType == 1 or 2 else open(page2, 'r')
    html2 = htmlObject.read()



    if pageType == 2:
        soup1 = BeautifulSoup(html1, features="lxml")
        body1 = soup1.find('div', {"class": "items-view"})
        tags1 = body1.findChildren()
        strBody1 = str(body1).split("\n")

        soup2 = BeautifulSoup(html2, features="lxml")
        body2 = soup2.find('div', {"class": "items-view"})
        tags2 = body2.findChildren()
        strBody2 = str(body2).split("\n")

        # Calculate String & Tag mismatch here
        i = 0
        # for tag in tags1:
        #     try:
        #         if tag.name == tags2[i].name:
        #             print("match")
        #         else:
        #             print(tag.name + "----" + tags2[i].name)
        #
        #         i += 1
        #     except Exception as error:
        #         break

    return "To be implemented ..."
