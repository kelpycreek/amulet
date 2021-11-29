run:
	yarn start

build:
	yarn build
	echo "copying"
	cp -rf build/* ./
	echo "removing"
	rm -rf build

.PHONY: run build