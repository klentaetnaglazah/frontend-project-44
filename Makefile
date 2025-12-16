.PHONY: install brain-games brain-even brain-calc brain-gcd brain-prime brain-progression publish lint

install: package-lock.json
	npm ci

package-lock.json:
	npm install

brain-games: install
	node bin/brain-games.js

brain-even: install
	node bin/brain-even.js

brain-calc: install
	node bin/brain-calc.js

brain-gcd: install
	node bin/brain-gcd.js

brain-prime: install
	node bin/brain-prime.js

brain-progression: install
	node bin/brain-progression.js

publish: install
	npm publish --dry-run

lint: install
	npx eslint .