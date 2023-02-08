#!/usr/bin/make -f

SRC :=src
LAST_BUILD :=$(SRC)/last_build
LAST_BUILD_INDEX :=$(LAST_BUILD)/index.html

.PHONY: test default local clean

default: 
	mkdir -p $(LAST_BUILD)
	echo "<!DOCTYPE html><html lang=\"ja\">" > $(LAST_BUILD_INDEX)
	echo "<head><meta charset=\"UTF-8\"><title>Yuchiki</title></head>" >> $(LAST_BUILD_INDEX)
	echo "<body>" >> $(LAST_BUILD_INDEX)
	date -R >> $(LAST_BUILD_INDEX)
	echo "</body></html>" >> $(LAST_BUILD_INDEX)
	bundle exec jekyll build

test:
	sass-lint --max-warnings 0 -v
	haml-lint
	htmlhint

local:
	jekyll s

clean:
	rm -rf docs/
