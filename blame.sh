#!/bin/bash

mananNetid="mpatel65"
zacNetid="zperry4"
riyaNetid="rpatel90"
tulsiNetid="ttulsi01"
christianNetid="cgraha37"

mananGithub="mpatel65"
zacGithub="zperry4"
zac="Zac"
perry="Perry"
riyaGithub="rpatel90"
tulsiGithub="tulsitailor"
christianGithub="Christian"
graham="Graham"

# Manan
for FILE in *.html *.css *.js README.md
do
  git blame -w $FILE | grep "$mananGithub" >> sprint1/$mananNetid.commits.txt
done

# # Zac
# for FILE in *.html *.css *.js README.md
# do
#   git blame -w $FILE | grep "$zacGithub" >> sprint1/$zacNetid.commits.txt
# done

# for FILE in *.html *.css *.js README.md
# do
#   git blame -w $FILE | grep -e "$zac" -e "$perry" >> sprint1/$zacNetid.commits.txt
# done

# Riya
# for FILE in *.html *.css *.js README.md
# do
#   git blame -w $FILE | grep "$riyaGithub" >> sprint1/$riyaNetid.commits.txt
# done

# Tulsi
for FILE in *.html *.css *.js README.md
do
  git blame -w $FILE | grep "$tulsiGithub" >> sprint1/$tulsiNetid.commits.txt
done

# Christian
for FILE in *.html *.css *.js README.md
do
  git blame -w $FILE | grep -e "$christianGithub" -e "$graham" >> sprint1/$christianNetid.commits.txt
done