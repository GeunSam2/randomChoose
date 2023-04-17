#!make
IMAGE_NAME = geunsam2/misthios-homepage

help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: build
build:          ## Build the docker image
	docker buildx build --platform linux/amd64 -t $(IMAGE_NAME) .

.PHONY: build-local
	docker build -t $(IMAGE_NAME):local .

.PHONY: run
run:            ## Run the docker image
	docker run -it --rm -p 3001:3000 $(IMAGE_NAME):local

.PHONY: push
push: build     ## Push the docker image
	docker push $(IMAGE_NAME)
