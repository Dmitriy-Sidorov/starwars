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
        }/*,
        {
            id: 31,
            name: "KN-55",
            post: "Soldier",
            image: "darthvader.png",
            parent: 5
        }*/
    ];
    var i;
    var j;
    var outPriority = '';
    var out = '';
    var outBase = '';
    var parentArray = [];
    var nameArray = [];
    var postArray = [];
    var countArray = [];
    var currentId = '';

    for (i = 0; i < military.length; i++) {
        countArray[i] = military[i].id;
    }
    countArray.reverse();

    function starwars() {
        for (i = 0; i < military.length; i++) {
            if (military[i].parent === undefined) {
                military[i].parent = 0;
            }
            parentArray[i] = military[i].parent;
            nameArray[i] = military[i].name;
            postArray[i] = military[i].post;

            outBase =
                '<div id="priority' + (military[0].id - 1) + '" ' +
                'data-priority-id="' + (parentArray[0] - 1) + '" ' +
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
                'data-priority-id="' + parentArray[i] + '" ' +
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
                'data-person-id="' + parentArray[i] + '" ' +
                'data-post="' + postArray[i] + '" ' +
                'data-name="' + nameArray[i] + '" ' +
                'class="col-lg-6 person hidden">' +
                '<div class="cursor">' +
                '<div id="indent' + military[i].id + '" class="indent">' +
                '<div class="number">' +
                '<span id="length' + military[i].id + '">' + (countArray[i] - 1) + '</span>' +
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
            var max = Math.max.apply(null, parentArray);
            var min = Math.min.apply(null, parentArray);

            if (dataBase.priorityId) {
                base.classList.add('hidden');
            }
            if (dataPerson.personId) {
                person.classList.add('hidden');
            }

            if (dataBase.priorityId === String(min - 1)) {
                base.classList.remove('hidden');
                back.classList.add('hidden');
                prev.classList.add('hidden');
                next.classList.add('hidden');
            }
            if (dataPerson.personId === String(min)) {
                person.classList.remove('hidden');
            }
        }
        //количество подчиненных
        countChild ();
    }

    mainScreen(); // сборка главного экрана

    function countChild () {
        var x = [];
        var z = [];
        for (i = 0; i < military.length; i++) {
            var chosenPerson = _$('#soldier' + military[i].id),
                dataChosen = chosenPerson.dataset;
            for (i = 0; i < military.length; i++) {
                var person = _$('#soldier' + military[i].id),
                    dataPerson = person.dataset;
                if (person.classList.contains('hidden') === false) {
                    x[i] = military[i].id;
                }
                if (person.classList.contains('hidden')
                    && dataPerson.personId > dataChosen.personId) {
                    z[i] = military[i].id;
                }
            }
        }
        x = x.filter(Number);
        z = z.filter(Number);
        var y = x.length;
        var j = z.length;
        console.log('j:' + j);
        console.log('y:' + y);
    }

    for (i = 0; i < military.length; i++) {

        var base = _$('#priority' + i),
            dataBase = base.dataset;
        var person = _$('#soldier' + military[i].id),
            dataPerson = person.dataset;
        var back = _$('#back');
        var prev = _$('#prev');
        var next = _$('#next');
        var max = Math.max.apply(null, parentArray);
        var min = Math.min.apply(null, parentArray);

        //проверка количества подчиненных
        var indent = _$('#indent' + military[i].id);
        if (dataPerson.name === 'Darth Sidius' || dataPerson.personId === String(max)) {
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
                    var charactersAll = _$('#soldier' + military[i].id);
                    if (priorityAll.id) {
                        priorityAll.classList.add('hidden'); // скрыть всех приоритетных
                    }
                    if (charactersAll.id) {
                        charactersAll.classList.add('hidden'); // скрыть всех подчиненных
                    }
                }
                for (i = 0; i < military.length; i++) {
                    var priority = _$('#priority' + military[i].id);
                    var characters = _$('#soldier' + military[i].id),
                        data = characters.dataset;
                    // открыть персонажа в шапке
                    if (this.id === ('soldier' + military[i].id)) {
                        priority.classList.remove('hidden');
                        var soldier = Number(data.personId);
                        var subordinate = soldier + 1;

                        for (i = 0; i < military.length; i++) {
                            var charactersThis = _$('#soldier' + military[i].id),
                                dataThis = charactersThis.dataset;
                            if (data.personId === String(soldier)) {
                                charactersThis.classList.add('hidden');
                                if (dataThis.personId === String(subordinate)) {
                                    charactersThis.classList.remove('hidden');
                                }
                            }
                        }

                        //перейти на подчиненных
                        /* if (data.post !== "Soldier") {
                             prev.classList.add('hidden');
                             for (i = 0; i < military.length; i++) {
                                 var charactersThis = _$('#soldier' + military[i].id),
                                     dataThis = charactersThis.dataset;
                                 if (data.personId === String(soldier)) {
                                     charactersThis.classList.add('hidden');
                                     if (dataThis.personId === String(subordinate)) {
                                         charactersThis.classList.remove('hidden');
                                     }
                                 }
                             }
                         } else {
                             for (i = 0; i < military.length; i++) {
                                 var charactersElse = _$('#soldier' + military[i].id),
                                     dataElse = charactersElse.dataset;
                                 if (dataElse.personId === String(soldier)) {
                                     charactersElse.classList.remove('hidden');
                                 }
                           }
                             // убирать нажатого персонажа, у которо нет подчиненных, из списка
                            characters.classList.add('hidden');
                         }*/
                    }
                }
            }
            //количество подчиненных
            countChild ();
        };

        //переход на уровень выше
        back.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peoplePrev = _$('#soldier' + military[i].id),
                    dataPeople = peoplePrev.dataset;

                var soldier = Number(dataPeople.personId) - 1;
                var subordinate = soldier + 1;

                if (dataPeople.personId === String(parentArray[i])
                    && peoplePrev.classList.contains('hidden') === false) { // найти открытые объекты

                    for (i = 0; i < military.length; i++) {
                        var general = _$('#priority' + i),
                            dataGeneral = general.dataset;
                        var man = _$('#soldier' + military[i].id),
                            dataMan = man.dataset;

                        general.classList.add('hidden');
                        man.classList.add('hidden');

                        if (dataPeople.personId === String(subordinate)) {
                            if (general.id === 'priority0') {
                                if (dataPeople.personId === String(min + 1)) {
                                    back.classList.add('hidden');

                                    prev.classList.add('hidden');
                                    next.classList.add('hidden');
                                } else {
                                    back.classList.remove('hidden');

                                    prev.classList.remove('hidden');
                                    next.classList.remove('hidden');
                                }
                            }
                            if (dataMan.personId === String(soldier)) {
                                man.classList.remove('hidden');
                            }
                        }
                    }
                    for (i = 0; i < military.length; i++) {
                        var priorityPrev = _$('#priority' + i),
                            dataPriority = priorityPrev.dataset;
                        if (dataPriority.priorityId === String(soldier - 1)) {
                            priorityPrev.classList.remove('hidden');
                            break;
                        }
                    }
                    break;
                }
            }
        };

        // Проверяет есть ли передыдущий элемент в списке данного ранга
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
        }

        // Проверяет есть ли следующий элемент в списке данного ранга
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
        }

        // переход на предыдущего персонажа
        prev.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peoplePrev = _$('#soldier' + military[i].id),
                    dataPrev = peoplePrev.dataset;
                var mainPrev = _$('#priority' + military[i].id),
                    dataMain = mainPrev.dataset;

                if (mainPrev.classList.contains('hidden') === false) {
                    currentId = i;
                    var result = checkForPrevSibling(currentId);
                    if (result) {
                        mainPrev.classList.add('hidden');
                        result.classList.remove('hidden');
                        console.log('получил результат');
                        break;
                    } else {
                        var base = _$('#priority0');
                        base.classList.remove('hidden');
                        console.log('не получил результат');
                        break;
                    }
                }
            }
        };

        //переход на следующего персонажа
        next.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peopleNext = _$('#soldier' + military[i].id);
                var mainNext = _$('#priority' + military[i].id),
                    dataMainNext = mainNext.dataset;

                if (mainNext.classList.contains('hidden') === false) {
                    currentId = i;
                    var result = checkForNextSibling(currentId);
                    if (result) {
                        mainNext.classList.add('hidden');
                        result.classList.remove('hidden');
                        console.log('получил результат');
                        break;
                    } else {
                        var base = _$('#priority0');
                        base.classList.remove('hidden');
                        console.log('не получил результат');
                        break;
                    }
                }
            }
        };
    }

};








