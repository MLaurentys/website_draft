/*
 * This file defines the constants used in the server application.
 */

function Define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
    });
}

const imageSourcePath = "www.github.com/MLaurentys/";
const pageTitle = "Buy Paper";
const mainImage = ["pic1.jpg", "Paper for all the purposes"];
const secondaryImages = [
    ["pic2", "Papel pergaminho resistente"],
    ["pic3", "Papel colorido de alta qualidade"],
    ["pic4", "Cortes de papel personalisados feitos na hora"],
    ["pic5", "Montagem de blocos e cardernos na hora"],
];

function BuildGalleryImageJSON(relativeImagePath, imageTitle) {
    return {
        path: imageSourcePath + relativeImagePath,
        title: imageTitle,
    };
}

const mainPageGallery = {
    title: pageTitle,
    mainImage: BuildGalleryImageJSON(...mainImage),
    secondaryImages: secondaryImages.map((imageInfo) =>
        BuildGalleryImageJSON(...imageInfo)
    ),
};

Define("webSocketsServerPort", 8000);
Define("mainPageGallery", mainPageGallery);
