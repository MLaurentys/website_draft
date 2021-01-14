/*
 * This file defines the constants used in the server application.
 */

function Define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
    });
}

const imageSourcePath = "https://i.imgur.com/";
const pageTitle = "Buy Paper";
const mainImage = ["gZZsfI6.jpg", "Paper for all the purposes"];
const secondaryImages = [
    ["YjuyTxC.jpg", "Papel pergaminho resistente"],
    ["cu9cXAS.jpg", "Papel colorido de alta qualidade"],
    ["Wziqx4b.jpg", "Cortes de papel personalisados feitos na hora"],
    ["RJe1QNr.jpg", "Montagem de blocos e cardernos na hora"],
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
