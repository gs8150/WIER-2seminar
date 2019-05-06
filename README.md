# WIER-2seminar
Repozitorij druge seminarske naloge za WIER

Extrakcija podatkov spletnih strani z uporabo treh različnih metod
  - uporaba regularnih izrazov
  - uporaba XPath metode
  - uporaba metode RoadRunner
  
Podatki strani se nahajajo na lokaciji implementation/data

How to run

# There are three types of pages. Every type has two pages. Page A and page B
overstockA = 'data/overstock.com/jewelry01.html'
overstockB = 'data/overstock.com/jewelry02.html'
rtvsloA = 'data/rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html'
rtvsloB = 'data/rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html'
neweggA = 'data/newegg.com/Desktop Processors and CPUs - Newegg.com.htm'
neweggB = 'data/newegg.com/Desktop Graphics Cards, Video Cards for PC - Newegg.com.htm'

# when running different pages change this variable to one of the following:
#               [rtvsloA, rtvsloB, overstockA, overstockB, neweggA, neweggB]

# for example. To run data extraction on page B of newegg page type set pageSource to 'neweggB'
pageSource = neweggB 
# -------------------------------------------------

