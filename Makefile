install:
	npm ci
	chmod +x bin/gendiff.js

gendiff:
	@bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
