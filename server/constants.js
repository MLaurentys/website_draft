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
const pageTitle = "Compre Papel";
const mainImage = ["gZZsfI6.jpg", "Papel para qualquer motivo"];
const secondaryImages = [
    ["YjuyTxC.jpg", "Papel pergaminho resistente"],
    ["cu9cXAS.jpg", "Papel colorido de alta qualidade"],
    ["Wziqx4b.jpg", "Cortes customizados na hora"],
    ["RJe1QNr.jpg", "Montagem de blocos na hora"],
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
