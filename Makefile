run:
	yarn start

clean:
	rm -rf static

build: clean
	yarn build
	echo "copying"
	cp -rf build/* ./
	echo "removing"
	rm -rf build

.PHONY: run build clean