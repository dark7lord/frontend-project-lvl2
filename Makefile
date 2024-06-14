PACKAGE_NAME := @hexlet/code

install:
	npm ci
	npm link

uninstall:
	npm -g uninstall $(PACKAGE_NAME)

gendiff:
	@bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
