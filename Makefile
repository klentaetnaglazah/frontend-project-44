.PHONY: install brain-games publish

install:
		if [ ! -f package-lock.json ]; then npm install; fi
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .