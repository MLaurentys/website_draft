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
const mainImage = [
    "gZZsfI6.jpg",
    "Papel para qualquer motivo",
    [
        ["gZZsfI6.jpg", "cu9cXAS.jpg"],
        "Papel para qualquer motivo",
        "TEXTO FIGURA 1 !!!\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
            " do eiusmod tempor incididunt ut labore et dolore magna" +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
            "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit in voluptate velit " +
            "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
            "occaecat cupidatat non proident, sunt in culpa qui officia " +
            "deserunt mollit anim id est laborum.",
    ],
];
const secondaryImages = [
    [
        "YjuyTxC.jpg",
        "Papel pergaminho resistente",
        [
            ["YjuyTxC.jpg", "cu9cXAS.jpg"],
            "Papel pergaminho resistente",
            "TEXTO FIGURA 2 !!!\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
                " do eiusmod tempor incididunt ut labore et dolore magna" +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit " +
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                "occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
        ],
    ],
    [
        "cu9cXAS.jpg",
        "Papel colorido de alta qualidade",
        [
            ["cu9cXAS.jpg", "Wziqx4b.jpg"],
            "Papel colorido de alta qualidade",
            "TEXTO FIGURA 3 !!!\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
                " do eiusmod tempor incididunt ut labore et dolore magna" +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit " +
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                "occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
        ],
    ],
    [
        "Wziqx4b.jpg",
        "Cortes variados na hora",
        [
            ["Wziqx4b.jpg", "cu9cXAS.jpg"],
            "Cortes variados na hora",
            "TEXTO FIGURA 4 !!!\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
                " do eiusmod tempor incididunt ut labore et dolore magna" +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit " +
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                "occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
        ],
    ],
    [
        "RJe1QNr.jpg",
        "Montagem de blocos na hora",
        [
            ["RJe1QNr.jpg", "cu9cXAS.jpg"],
            "Montagem de blocos na hora",
            "TEXTO FIGURA 5 !!!\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
                " do eiusmod tempor incididunt ut labore et dolore magna" +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit " +
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                "occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
        ],
    ],
];

function BuildGalleryImageJSON(relativeImagePath, imageTitle, lightboxInfo) {
    return {
        path: imageSourcePath + relativeImagePath,
        title: imageTitle,
        lightbox: {
            imagePaths: lightboxInfo[0].map(
                (relPath) => imageSourcePath + relPath
            ),
            title: lightboxInfo[1],
            description: lightboxInfo[2],
        },
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
