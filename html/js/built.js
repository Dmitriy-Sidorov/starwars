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
        },
        {
            id: 31,
            name: "KN-55",
            post: "Soldier",
            image: "darthvader.png",
            parent: 5
        },
        {
            id: 32,
            name: "Jah Batut",
            post: "Admiral",
            image: "jahbatut.png",
            parent: 6
        }
    ];
    var i;
    var parentArray = [];
    var nameArray = [];
    var postArray = [];
    var currentId = '';

    function starwars() {
        var outPriority = '';
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

            out +=
                '<div id="soldier' + military[i].id + '" ' +
                'data-id="' + military[i].id + '" ' +
                'data-parent-id="' + parentArray[i] + '" ' +
                'data-post="' + postArray[i] + '" ' +
                'data-name="' + nameArray[i] + '" ' +
                'class="col-lg-6 person hidden">' +
                '<div class="cursor">' +
                '<div id="indent' + military[i].id + '" class="indent">' +
                '<div class="number">' +
                '<span id="length' + military[i].id + '"></span>' +
                '</div>' +
                '</div>' +
                '<div class="ava">' +
                '<img src="assets/avatars/' + military[i].image + '" alt="' + military[i].name + '">' +
                '<div class="img-hover"></div>' +
                '</div>' +
                '<div class="name">' +
                '<h2>' + military[i].name + '</h2>' +
                '<span>' + military[i].post + '</span>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        _$('#outpriority').innerHTML = outBase + outPriority;
        _$('#out').innerHTML = out;
    }

    starwars(); // сборка

    function _$(selector) {
        return document.querySelector(selector);
    }

    function mainScreen() {
        for (i = 0; i < military.length; i++) {
            var base = _$('#priority' + i),
                dataBase = base.dataset;
            var person = _$('#soldier' + military[i].id),
                dataPerson = person.dataset;
            var back = _$('#back');
            var prev = _$('#prev');
            var next = _$('#next');
            var min = Math.min.apply(null, parentArray);

            if (dataBase.parentId) {
                base.classList.add('hidden');
            }
            if (dataPerson.parentId) {
                person.classList.add('hidden');
            }

            if (dataBase.parentId === String(min - 1)) {
                base.classList.remove('hidden');
                back.classList.add('hidden');
                prev.classList.add('hidden');
                next.classList.add('hidden');
            }
            if (dataPerson.parentId === String(min)) {
                person.classList.remove('hidden');
            }
        }
        //количество подчиненных
        countPerson();
    }

    mainScreen(); // сборка главного экрана

    function countPerson() {
        for (i = 0; i < military.length; i++) {
            var person = _$('#soldier' + military[i].id),
                dataPerson = person.dataset;
            if (person.classList.contains('hidden') === false) {
                countChild(Number(dataPerson.parentId));
                break;
            }
        }
    }

    function countChild(parent) {
        var countArray = [];
        for (i = 0; i < military.length; i++) {
            var person = _$('#soldier' + military[i].id),
                dataPerson = person.dataset;
            if (person.classList.contains('hidden')
                && dataPerson.parentId > parent) {
                countArray[i] = military[i].id;
            }
        }
        countArray = countArray.filter(Number);
        var countArrayLength = countArray.length;
        for (i = 0; i < military.length; i++) {
            person = _$('#soldier' + military[i].id);
            var childLength = _$('#length' + military[i].id);
            if (person.classList.contains('hidden') === false) {
                childLength.innerHTML = countArrayLength;
            }
        }
    }


    for (i = 0; i < military.length; i++) {
        var person = _$('#soldier' + military[i].id),
            dataPerson = person.dataset;
        var back = _$('#back');
        var prev = _$('#prev');
        var next = _$('#next');
        var max = Math.max.apply(null, parentArray);
        var min = Math.min.apply(null, parentArray);

        //проверка количества подчиненных
        var indent = _$('#indent' + military[i].id);
        if (dataPerson.name === 'Darth Sidius' || dataPerson.parentId === String(max)) {
            indent.classList.add('hidden');
        }

        var logo = _$('#logo'); // переход на главный экран
        logo.onclick = mainScreen;

        var soldier = _$('#soldier' + military[i].id);// взаимодействие с персонажами
        soldier.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var base = _$('#priority0');
                if (base.id === 'priority0') {
                    //скрыть базовый объект
                    base.classList.add('hidden');
                    //открыть навигацию
                    back.classList.remove('hidden');
                    prev.classList.remove('hidden');
                    next.classList.remove('hidden');
                }
                for (i = 0; i < military.length; i++) {
                    var priorityAll = _$('#priority' + military[i].id);
                    var personAll = _$('#soldier' + military[i].id);
                    priorityAll.classList.add('hidden'); // скрыть всех приоритетных
                    personAll.classList.add('hidden'); // скрыть всех подчиненных
                }
                for (i = 0; i < military.length; i++) {
                    var priority = _$('#priority' + military[i].id);
                    var person = _$('#soldier' + military[i].id),
                        dataPerson = person.dataset;
                    // открыть персонажа в шапке
                    if (this.id === 'soldier' + military[i].id) {
                        priority.classList.remove('hidden');
                        var chief = Number(dataPerson.parentId);
                        var subordinate = chief + 1;
                        for (i = 0; i < military.length; i++) {
                            var personThis = _$('#soldier' + military[i].id),
                                dataPersonThis = personThis.dataset;
                            if (dataPerson.parentId === String(chief)) {
                                personThis.classList.add('hidden');
                                if (dataPersonThis.parentId === String(subordinate)) {
                                    personThis.classList.remove('hidden');
                                }
                            }
                        }
                    }
                }
            }
            //количество подчиненных
            countPerson();
        };

        //переход на уровень выше
        back.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priorityAll = _$('#priority' + military[i].id),
                    dataPriorityAll = priorityAll.dataset;
                var chief = Number(dataPriorityAll.parentId);
                if (priorityAll.classList.contains('hidden') === false) {
                    for (i = 0; i < military.length; i++) {
                        var priority = _$('#priority' + military[i].id);
                        var person = _$('#soldier' + military[i].id),
                            dataPerson = person.dataset;
                        person.classList.add('hidden');
                        if (dataPerson.parentId === String(chief)) {
                            priority.classList.add('hidden');
                            person.classList.remove('hidden');
                            if (dataPerson.parentId === String(min)) {
                                back.classList.add('hidden');
                                prev.classList.add('hidden');
                                next.classList.add('hidden');
                            }
                        }
                    }
                }
            }
            for (i = 0; i < military.length; i++) {
                priority = _$('#priority' + i);
                var dataPriority = priority.dataset;
                if (dataPriority.parentId === String(chief - 1)) {
                    priority.classList.remove('hidden');
                    break;
                }
            }
        };

        // Ищет есть ли передыдущий элемент в списке данного уровня
        function checkForPrevSibling(currentId) {
            for (i = military.length - 1; i >= 0; i--) {
                if (i < currentId) {
                    if (military[currentId].parent === parentArray[i]) {
                        return _$('#priority' + military[i].id);
                    }
                }
            }
            for (i = military.length - 1; i >= currentId; i--) {
                if (i !== currentId) {
                    if (military[currentId].parent === parentArray[i]) {
                        return _$('#priority' + military[i].id);
                    }
                }
            }
            return false;
        }

        // Ищет есть ли следующий элемент в списке данного уровня
        function checkForNextSibling(currentId) {
            for (i = currentId; i < military.length; i++) {
                if (i > currentId) {
                    if (military[currentId].parent === parentArray[i]) {
                        return _$('#priority' + military[i].id);
                    }
                }
            }
            for (i = 0; i < currentId; i++) {
                if (i !== currentId) {
                    if (military[currentId].parent === parentArray[i]) {
                        return _$('#priority' + military[i].id);
                    }
                }
            }
            return false;
        }

        // переход на предыдущего персонажа
        prev.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priority = _$('#priority' + military[i].id);
                if (priority.classList.contains('hidden') === false) {
                    currentId = i;
                    var result = checkForPrevSibling(currentId);
                    if (result) {
                        priority.classList.add('hidden');
                        result.classList.remove('hidden');
                        break;
                    } else {
                        break;
                    }
                }
            }
        };

        //переход на следующего персонажа
        next.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var priority = _$('#priority' + military[i].id);
                if (priority.classList.contains('hidden') === false) {
                    currentId = i;
                    var result = checkForNextSibling(currentId);
                    if (result) {
                        priority.classList.add('hidden');
                        result.classList.remove('hidden');
                        break;
                    } else {
                        break;
                    }
                }
            }
        };
    }
};