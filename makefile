#!/usr/bin/make -f

.PHONY: test default

default:
	date -R > last_build.txt
	bundle exec jekyll build

test:
	htmlhint