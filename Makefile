
.PHONY: all clean clobber
all: src/main.css

# superclean!
clobber: clean
	rm -rf bower_components

clean:
	rm -rf bower_components
	rm src/*.map
	rm src/main.css
	rm src/intermediate.css

# Stylesheets
src/main.css: src/intermediate.css
	myth src/intermediate.css src/main.css

src/intermediate.css: src/main.scss
	sass src/main.css src/intermediate.css --no-cache
