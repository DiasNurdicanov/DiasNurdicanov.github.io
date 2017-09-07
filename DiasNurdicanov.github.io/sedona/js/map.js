ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [34.865966, -111.763806],
            zoom: 16
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: "Седона",
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",
            // Своё изображение иконки метки.
            iconImageHref: "img/icon-map-marker.svg",
            // Размеры метки.
            iconImageSize: [27, 27]
        });

    myMap.geoObjects.add(myPlacemark);
});
