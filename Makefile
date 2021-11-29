run:
	yarn start

clean:
	rm -rf static

build: clean
	PUBLIC_URL=amulet yarn build
	echo "copying"
	cp -rf build/* ./
	echo "removing"
	rm -rf build

.PHONY: run build clean