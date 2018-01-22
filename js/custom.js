window.onload = function () {

    var military = [
        {
            id: 1,
            name: "Darth Vader",
            post: "Supreme Commander",
            image: "darthvader.png"
        },
        {
            id: 2,
            name: "Wilhuf Tarkin",
            post: "Grand Moff",
            image: "wilhuftarkin.png",
            parent: 1
        },
        {
            id: 3,
            name: "Olson Krennic",
            post: "Director",
            image: "olsonkrennic.png",
            parent: 1
        },
        {
            id: 4,
            name: "Esmin Kesig",
            post: "Admiral",
            image: "esminkesig.png",
            parent: 1
        },
        {
            id: 5,
            name: "Phasma",
            post: "Captain",
            image: "phasma.png",
            parent: 2
        },
        {
            id: 6,
            name: "Will Shepard",
            post: "Commander",
            image: "willshepard.png",
            parent: 2
        },
        {
            id: 7,
            name: "Allin Prohq",
            post: "Ensign",
            image: "allinprohq.png",
            parent: 2
        },
        {
            id: 8,
            name: "Jah Batut",
            post: "Admiral",
            image: "jahbatut.png",
            parent: 2
        },
        {
            id: 9,
            name: "FN-23",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 2
        },
        {
            id: 10,
            name: "FN-24",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 2
        },
        {
            id: 11,
            name: "FN-25",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 2
        },
        {
            id: 12,
            name: "FN-26",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 2
        },
        {
            id: 13,
            name: "RN-46",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 2
        },
        {
            id: 14,
            name: "RN-36",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 2
        },
        {
            id: 15,
            name: "Darth Sidius",
            post: "Galactic Emperor",
            image: "darthsidius.png"
        },
        {
            id: 16,
            name: "PN-65",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 17,
            name: "PN-66",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 18,
            name: "PN-67",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 19,
            name: "TN-11",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 20,
            name: "TN-12",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 3
        },
        {
            id: 21,
            name: "TN-13",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 3
        },
        {
            id: 22,
            name: "TN-14",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 3
        },
        {
            id: 23,
            name: "WN-23",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 24,
            name: "WN-24",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 25,
            name: "WN-25",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 26,
            name: "WN-26",
            post: "Soldier",
            image: "stromtrooper2.png",
            parent: 3
        },
        {
            id: 27,
            name: "KN-19",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 4
        },
        {
            id: 28,
            name: "KN-20",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 4
        },
        {
            id: 29,
            name: "KN-21",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 4
        },
        {
            id: 30,
            name: "KN-22",
            post: "Soldier",
            image: "stromtrooper.png",
            parent: 4
        }
    ];
    var i = 0;
    var parentArray = [];
    var nameArray = [];
    var postArray = [];
    var currentId = '';

    function starWars() {
        var outPriority = '';
        var outSidius = '';
        var out = '';
        var outBase = '';
        for (i = 0; i < military.length; i++) {
            if (military[i].parent === undefined) {
                military[i].parent = 0;
            }
            parentArray[i] = military[i].parent;
            nameArray[i] = military[i].name;
            postArray[i] = military[i].post;

            outBase =
                '<div id="priority' + (military[0].id - 1) + '" ' +
                'data-parent-id="' + (parentArray[0] - 1) + '" ' +
                'class="hidden">' +
                '<div class="ava">' +
                '<img src="assets/avatars/empire.png" alt="Galactic Empire">' +
                '</div>' +
                '<h1>Galactic Empire</h1>' +
                '<span>Imperial military</span>' +
                '</div>';

            outPriority +=
                '<div id="priority' + military[i].id + '" ' +
                'data-id="' + military[i].id + '" ' +
                'data-parent-id="' + parentArray[i] + '" ' +
                'data-post="' + postArray[i] + '" ' +
                'data-name="' + nameArray[i] + '" ' +
                'class="hidden">' +
                '<div class="ava">' +
                '<img src="assets/avatars/' + military[i].image + '" alt="' + military[i].name + '">' +
                '</div>' +
                '<h1>' + military[i].name + '</h1>' +
                '<span>' + military[i].post + '</span>' +
                '</div>';

            var outPersone =
                '<div id="soldier' + military[i].id + '" ' +
                'data-id="' + military[i].id + '" ' +
                'data-parent-id="' + parentArray[i] + '" ' +
                'data-post="' + postArray[i] + '" ' +
                'data-name="' + nameArray[i] + '" ' +
                'class="col-lg-two person hidden">' +
                '<div class="align">' +
                '<div class="ava">' +
                '<div id="indent' + military[i].id + '" class="indent">' +
                '<div class="number">' +
                '<span id="length' + military[i].id + '"></span>' +
                '</div>' +
                '</div>' +
                '<img src="assets/avatars/' + military[i].image + '" alt="' + military[i].name + '">' +
                '<div class="img-hover"></div>' +
                '</div>' +
                '<div class="name">' +
                '<h2>' + military[i].name + '</h2>' +
                '<span>' + military[i].post + '</span>' +
                '</div>' +
                '</div>' +
                '</div>';

            if (nameArray[i] === 'Darth Sidius') {
                outSidius += outPersone;
            } else {
                out += outPersone;
            }
        }
        _$('#outpriority').innerHTML = outBase + outPriority;
        _$('#out').innerHTML = outSidius + out;
    }

    starWars(); // сборка
    mainScreen(); // сборка главного экрана
    counter(); // посчитать количество подчиненных

    for (i = 0; i < military.length; i++) {
        var logo = _$('#logo'); // переход на главный экран
        logo.onclick = mainScreen;

        var soldier = _$('#soldier' + military[i].id); // взаимодействие с персонажами
        soldier.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priority = _$('#priority' + military[i].id);
                priority.classList.add('hidden');
                if (this.id === 'soldier' + military[i].id) {
                    basePriority(i); //проверка базовых элементов
                    outputOfChildren(military[i].id); //выведение подчиненных и начальника
                }
            }
        };

        var back = _$('#back'); //переход на уровень выше
        back.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priorityAll = _$('#priority' + military[i].id),
                    dataPriorityAll = priorityAll.dataset;
                if (priorityAll.classList.contains('hidden') === false) {
                    basePriority(i); //проверка базовых элементов
                    outputOfChildren(dataPriorityAll.parentId); //выведение подчиненных и начальника
                }
            }
        };

        var prev = _$('#prev'); // переход на предыдущего персонажа
        prev.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priority = _$('#priority' + military[i].id);
                if (priority.classList.contains('hidden') === false) {
                    var result = checkForPrevSibling(i);
                    if (result) {
                        priority.classList.add('hidden');
                        outputOfChildren(result);
                        break;
                    } else {
                        break;
                    }
                }
            }
        };

        var next = _$('#next'); //переход на следующего персонажа
        next.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priority = _$('#priority' + military[i].id);
                if (priority.classList.contains('hidden') === false) {
                    var result = checkForNextSibling(i);
                    if (result) {
                        priority.classList.add('hidden');
                        outputOfChildren(result);
                        break;
                    } else {
                        break;
                    }
                }
            }
        };
    }

    function mainScreen() {
        for (var i = 0; i < military.length; i++) {
            _$('#priority' + military[i].id).classList.add('hidden');
        }
        var min = Math.min.apply(null, parentArray);
        basePriority(min); //проверка базовых элементов
        outputOfChildren(min); //выведение подчиненных и начальника
    }

    function counter() {
        for (i = 0; i < military.length; i++) {
            var numberOfChildren = _$('#length' + military[i].id);
            numberOfChildren.innerHTML = countPerson(military[i].id);
            var indent = _$('#indent' + military[i].id);
            if (numberOfChildren.innerHTML === '0') {
                indent.classList.add('hidden');
            }
        }
    }

    //функция проверки базовых элементов
    function basePriority(index) {
        _$('#priority' + military[index].id).classList.add('hidden');
        var base = _$('#priority0');
        var back = _$('#back');
        var prev = _$('#prev');
        var next = _$('#next');
        var min = Math.min.apply(null, parentArray);
        if (parentArray[index] === min
            && base.classList.contains('hidden') === false) {
            base.classList.add('hidden');
            back.classList.remove('hidden');
            prev.classList.remove('hidden');
            next.classList.remove('hidden');
        } else if (parentArray[index] === min
            && base.classList.contains('hidden')) {
            base.classList.remove('hidden');
            back.classList.add('hidden');
            prev.classList.add('hidden');
            next.classList.add('hidden');
        }
    }

    //функция подсчета подчиненных
    function countPerson(id) {
        var counter = 0;
        for (var i = 0; i < military.length; i++) {
            if (parentArray[i] === id) {
                counter++;
                counter += countPerson(military[i].id);
            }
        }
        return counter;
    }

    //функция выведения подчиненных и начальника
    function outputOfChildren(thisId) {
        for (var i = 0; i < military.length; i++) {
            var priorityThis = _$('#priority' + military[i].id),
                dataPriorityThis = priorityThis.dataset;
            var personThis = _$('#soldier' + military[i].id),
                dataPersonThis = personThis.dataset;
            personThis.classList.add('hidden');
            if (dataPersonThis.parentId === String(thisId)) {
                personThis.classList.remove('hidden');
            }
            if (dataPriorityThis.id === String(thisId)) {
                priorityThis.classList.remove('hidden');
            }
        }
    }

    //Ищет есть ли передыдущий элемент в списке данного уровня
    function checkForPrevSibling(currentId) {
        for (var i = military.length - 1; i >= 0; i--) {
            if (i < currentId) {
                if (military[currentId].parent === parentArray[i]) {
                    return military[i].id;
                }
            }
        }
        for (i = military.length - 1; i >= currentId; i--) {
            if (i !== currentId) {
                if (military[currentId].parent === parentArray[i]) {
                    return military[i].id;
                }
            }
        }
        return false;
    }

    //Ищет есть ли следующий элемент в списке данного уровня
    function checkForNextSibling(currentId) {
        for (var i = currentId; i < military.length; i++) {
            if (i > currentId) {
                if (military[currentId].parent === parentArray[i]) {
                    return military[i].id;
                }
            }
        }
        for (i = 0; i < currentId; i++) {
            if (i !== currentId) {
                if (military[currentId].parent === parentArray[i]) {
                    return military[i].id;
                }
            }
        }
        return false;
    }

    function _$(selector) {
        return document.querySelector(selector);
    }
};

