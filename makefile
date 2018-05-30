#!/usr/bin/make -f

.PHONY: test default

default:
	echo "<!DOCTYPE html><html lang=\"ja\">" > last_build/index.html
	echo "<head><meta charset=\"UTF-8\"><title>Yuchiki</title></head>" >> last_build/index.html
	echo "<body>" >> last_build/index.html
	date -R >> last_build/index.html
	echo "</body></html>" >> last_build/index.html
	bundle exec jekyll build

test:
	sass-lint --max-warnings 0 -v 2> /dev/null
	haml-lint
	htmlhint