run:
	yarn start

build:
	PUBLIC_URL=amulet yarn build
	echo "copying"
	cp -rf build/* ./
	echo "removing"
	rm -rf build

.PHONY: run build