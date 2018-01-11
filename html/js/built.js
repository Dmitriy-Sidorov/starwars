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
    var i;
    var outPriority = '';
    var out = '';
    var outBase = '';
    var parentArray = [];
    var nameArray = [];
    var postArray = [];
    var countArray = [];
    var rankArray = [];
    var j = 1;

    // сортирвка по рангу
    for (i = 0; i < military.length; i++) {
        if (military[i].post === 'Galactic Emperor') {
            rankArray[i] = 1;
        }
        if (military[i].post === 'Supreme Commander') {
            rankArray[i] = 2;
        }
        if (military[i].post === 'Grand Moff') {
            rankArray[i] = 3;
        }
        if (military[i].post === 'Director') {
            rankArray[i] = 4;
        }
        if (military[i].post === 'Admiral') {
            rankArray[i] = 5;
        }
        if (military[i].post === 'Captain') {
            rankArray[i] = 6;
        }
        if (military[i].post === 'Commander') {
            rankArray[i] = 7;
        }
        if (military[i].post === 'Admiral' && military[i].name === 'Jah Batut') {
            rankArray[i] = 8;
        }
        if (military[i].post === 'Ensign') {
            rankArray[i] = 9;
        }
        if (military[i].post === 'Soldier') {
            rankArray[i] = 9 + j;
            j++
        }
    }

    for (i = 0; i < military.length; i++) {
        countArray[i] = military[i].id;
    }
    countArray.reverse();


    function starwars() {

        for (i = 0; i < military.length; i++) {

            var a = rankArray.indexOf(i + 1); // расположение персонажей по рангу

            if (military[a].parent === undefined) {
                military[a].parent = 0;
            }
            parentArray[a] = military[a].parent;
            nameArray[a] = military[a].name;
            postArray[a] = military[a].post;


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
                '<div id="priority' + military[a].id + '" ' +
                'data-id="' + military[a].id + '" ' +
                'data-priority-id="' + parentArray[a] + '" ' +
                'data-post="' + postArray[a] + '" ' +
                'data-name="' + nameArray[a] + '" ' +
                'class="hidden">' +
                '<div class="ava">' +
                '<img src="assets/avatars/' + military[a].image + '" alt="' + military[a].name + '">' +
                '</div>' +
                '<h1>' + military[a].name + '</h1>' +
                '<span>' + military[a].post + '</span>' +
                '</div>';

            out +=
                '<div id="soldier' + military[a].id + '" ' +
                'data-id="' + military[a].id + '" ' +
                'data-person-id="' + parentArray[a] + '" ' +
                'data-post="' + postArray[a] + '" ' +
                'data-name="' + nameArray[a] + '" ' +
                'class="col-lg-6 person hidden">' +
                    '<div class="cursor">'+
                        '<div id="indent' + (a + 1) + '" class="indent">' +
                            '<div class="number">' +
                                '<span id="length' + (a + 1) + '">' + (countArray[i] - 1) + '</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="ava">' +
                            '<img src="assets/avatars/' + military[a].image + '" alt="' + military[a].name + '">' +
                            '<div class="img-hover"></div>' +
                        '</div>' +
                        '<div class="name">' +
                            '<h2>' + military[a].name + '</h2>' +
                            '<span>' + military[a].post + '</span>' +
                        '</div>' +
                    '</div>'+
                '</div>';
        }
        document.getElementById('outpriority').innerHTML = outBase + outPriority;
        document.getElementById('out').innerHTML = out;
    }

    starwars(); // сборка

    for (i = 0; i < military.length; i++) {

        // сборка главного экрана
        var base = document.querySelector('#priority' + i),
            dataBase = base.dataset;
        var person = document.querySelector('#soldier' + military[i].id),
            dataPerson = person.dataset;
        var max = Math.max.apply(null, parentArray);
        var min = Math.min.apply(null, parentArray);

        var back = document.getElementById('back');
        var onwards = document.getElementById('onwards');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');

        if (dataBase.priorityId === String(min - 1)) {
            base.classList.remove('hidden');
            back.classList.add('hidden');
            onwards.classList.add('hidden');
            prev.classList.add('hidden');
            next.classList.add('hidden');
        }
        if (dataPerson.personId === String(min)) {
            person.classList.remove('hidden');
        }

        //количество подчиненных
        /*Если у каждого подчиненного может быть лишь один начальник, то счет идет в обратном порядке,
        а у солдата, как низшего ранга, не может быть подчиненных*/
        var indent = document.getElementById('indent' + military[i].id);
        var length = document.getElementById('length' + military[i].id);
        if (dataPerson.post === "Soldier") {
            indent.classList.add('hidden');
        }

        var logo = document.getElementById('logo'); // восстановление главного экрана
        logo.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var base = document.querySelector('#priority' + i),
                    dataBase = base.dataset;
                var person = document.querySelector('#soldier' + military[i].id),
                    dataPerson = person.dataset;
                var max = Math.max.apply(null, parentArray);
                var min = Math.min.apply(null, parentArray);

                var prev = document.getElementById('prev');
                var next = document.getElementById('next');

                if (dataBase.priorityId) {
                    base.classList.add('hidden');
                }
                if (dataPerson.personId) {
                    person.classList.add('hidden');
                }

                if (dataBase.priorityId === String(min - 1)) {
                    base.classList.remove('hidden');
                    back.classList.add('hidden');
                    onwards.classList.add('hidden');
                    prev.classList.add('hidden');
                    next.classList.add('hidden');
                }
                if (dataPerson.personId === String(min)) {
                    person.classList.remove('hidden');
                }
            }
        };

        var soldier = document.getElementById('soldier' + military[i].id);// взаимодействие с персонажами
        soldier.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var base = document.getElementById('priority0');
                if (base.id === 'priority0') {
                    //скрыть базовый объект
                    base.classList.add('hidden');
                    //открыть навигацию
                    back.classList.remove('hidden');
                    onwards.classList.remove('hidden');
                    prev.classList.remove('hidden');
                    next.classList.remove('hidden');
                }
                for (i = 0; i < military.length; i++) {
                    var priorityAll = document.getElementById('priority' + military[i].id);
                    var charactersAll = document.getElementById('soldier' + military[i].id);
                    if (priorityAll.id) {
                        priorityAll.classList.add('hidden'); // скрыть всех приоритетных
                    }
                    if (charactersAll.id) {
                        charactersAll.classList.add('hidden'); // скрыть всех подчиненных
                    }
                }
                for (i = 0; i < military.length; i++) {
                    var priority = document.getElementById('priority' + military[i].id);
                    var characters = document.querySelector('#soldier' + military[i].id),
                        data = characters.dataset;
                    // открыть персонажа в шапке
                    if (this.id === ('soldier' + military[i].id)) {
                        priority.classList.remove('hidden');
                        var soldier = Number(data.personId);
                        var subordinate = soldier + 1;
                        //перейти на подчиненных
                        if (data.post !== "Soldier") {
                            prev.classList.add('hidden');
                            for (i = 0; i < military.length; i++) {
                                var charactersThis = document.querySelector('#soldier' + military[i].id),
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
                                var charactersElse = document.querySelector('#soldier' + military[i].id),
                                    dataElse = charactersElse.dataset;
                                if (dataElse.personId === String(soldier)) {
                                    charactersElse.classList.remove('hidden');
                                }
                            }
                            // убирать нажатого персонажа, у которо нет подчиненных, из списка
                            characters.classList.add('hidden');
                        }
                    }
                }
            }
        };

        //переход на уровень выше
        back.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peoplePrev = document.querySelector('#soldier' + military[i].id),
                    dataPeople = peoplePrev.dataset;

                var soldier = Number(dataPeople.personId) - 1;
                var subordinate = soldier + 1;

                if (dataPeople.personId === String(parentArray[i])
                    && peoplePrev.classList.contains('hidden') === false) { // найти открытые объекты

                    for (i = 0; i < military.length; i++) {
                        var general = document.querySelector('#priority' + i),
                            dataGeneral = general.dataset;
                        var man = document.querySelector('#soldier' + military[i].id),
                            dataMan = man.dataset;

                        general.classList.add('hidden');
                        man.classList.add('hidden');

                        if (dataPeople.personId === String(subordinate)) {
                            if (general.id === 'priority0') {
                                if (dataPeople.personId === String(min + 1)) {
                                    back.classList.add('hidden');
                                    onwards.classList.add('hidden');
                                    prev.classList.add('hidden');
                                    next.classList.add('hidden');
                                } else {
                                    back.classList.remove('hidden');
                                    onwards.classList.remove('hidden');
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
                        var priorityPrev = document.querySelector('#priority' + i),
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

        //переход на уровень ниже
        /*Кнопка добавлена, так как с 3 на 4 уровень никак не перейти следуя инструкции,
        что у подчиненного один начальник, что означает, что у солдата не может быть подчененного,
        также, следуя пункту о переключении между персонажами "предыдущий/следующий",
        на 3 уровне не получится перейти на 4*/
        onwards.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var people = document.querySelector('#soldier' + military[i].id),
                    data = people.dataset;

                var soldier = Number(data.personId);
                var subordinate = soldier + 1;

                if (data.personId === String(military[i].parent)
                    && people.classList.contains('hidden') === false) { //найти открытые объекты

                    for (i = 0; i < military.length; i++) {
                        var general = document.getElementById('priority' + i);
                        var man = document.querySelector('#soldier' + military[i].id),
                            dataMan = man.dataset;

                        general.classList.add('hidden');
                        man.classList.add('hidden');

                        if (data.personId === String(soldier)) {
                            if (data.personId === String(max - 1)) {
                                back.classList.remove('hidden');
                                onwards.classList.add('hidden');
                            } else {
                                back.classList.remove('hidden');
                                onwards.classList.remove('hidden');
                            }
                            if (dataMan.personId === String(subordinate)) {
                                man.classList.remove('hidden');
                            }
                        }
                    }
                    for (i = 0; i < military.length; i++) {
                        var priorityPrev = document.querySelector('#priority' + i),
                            dataPriority = priorityPrev.dataset;
                        if (dataPriority.priorityId === String(soldier)) {
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
            var currentSolderIndex = null;
            for (i = 0; i < military.length + 1; i++) {
                if (military[i].id === currentId) {
                    currentSolderIndex = i;
                    break;
                }
            }
            if (currentSolderIndex === military.length - 1) {
                return true;
            }
            for (i = 0; i < currentSolderIndex; i++) {
                if (military[currentSolderIndex].parent === parentArray[i]) {
                    return false;
                }
            }
            return true;
        }

        // Проверяет есть ли следующий элемент в списке данного ранга
        function checkForNextSibling(currentId) {
            var currentSolderIndex = null;
            for (i = military.length - 1; i >= 0; i--) {
                if (military[i].id === currentId) {
                    currentSolderIndex = i;
                    break;
                }
            }
            if (currentSolderIndex === military.length - 1) {
                return true;
            }
            for (i = military.length - 1; i > currentSolderIndex; i--) {
                if (military[currentSolderIndex].parent === parentArray[i]) {
                    return false;
                }
            }
            return true;
        }

        // переход на предыдущего персонажа
        prev.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peopleNext = document.querySelector('#soldier' + military[i].id),
                    dataNext = peopleNext.dataset;
                var mainNext = document.querySelector('#priority' + military[i].id),
                    dataMain = mainNext.dataset;

                var soldierId = military[i].id;


                if (dataMain.id === String(soldierId)
                    && mainNext.classList.contains('hidden') === false) { //найти открытый объект
                    for (i = 0; i < military.length; i++) {

                        var people = document.querySelector('#soldier' + military[i].id),
                            data = people.dataset;
                        var priorityNext = document.querySelector('#priority' + military[i].id),
                            dataPriority = priorityNext.dataset;


                        if (dataPriority.id === String((soldierId - 1))) {
                            priorityNext.classList.remove('hidden');
                            for (i = 0; i < military.length; i++) {
                                priorityNext = document.querySelector('#priority' + military[i].id),
                                    dataPriority = priorityNext.dataset;
                                if (dataPriority.id === String((soldierId))) {
                                    priorityNext.classList.add('hidden');
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    break;
                }
            }

            var currentId = Number(dataNext.id) - 1;
            var result = checkForPrevSibling(currentId);
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            next.classList.remove('hidden');
            if (result) {
                // Прячем стрелочку
                prev.classList.add('hidden');
            } else {
                prev.classList.remove('hidden');
            }
        };

        //переход на следующего персонажа
        next.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peopleNext = document.querySelector('#soldier' + military[i].id),
                    dataNext = peopleNext.dataset;
                var mainNext = document.querySelector('#priority' + military[i].id),
                    dataMain = mainNext.dataset;

                var soldierId = military[i].id;


                if (dataMain.id === String(soldierId)
                    && mainNext.classList.contains('hidden') === false) { //найти открытый объект
                    for (i = 0; i < military.length; i++) {

                        var people = document.querySelector('#soldier' + military[i].id),
                            data = people.dataset;
                        var priorityNext = document.querySelector('#priority' + military[i].id),
                            dataPriority = priorityNext.dataset;

                        if (Number(data.personId) > Number(dataMain.priorityId)
                            && mainNext.classList.contains('hidden') === false
                            && people.classList.contains('hidden') === false) {

                            if (dataMain.id === String(soldierId)) {
                                priorityNext.classList.remove('hidden');
                                for (i = 0; i < military.length; i++) {
                                    priorityNext = document.querySelector('#priority' + military[i].id),
                                        dataPriority = priorityNext.dataset;
                                    if (dataPriority.id === String(soldierId)) {
                                        priorityNext.classList.add('hidden');
                                        break;
                                    }
                                }
                                break;
                            }

                        } else if (data.personId === dataMain.priorityId
                            && mainNext.classList.contains('hidden') === false
                            && people.classList.contains('hidden') === false) {

                            if (dataPriority.id === String((soldierId + 1))) {
                                priorityNext.classList.remove('hidden');
                                for (i = 0; i < military.length; i++) {
                                    priorityNext = document.querySelector('#priority' + military[i].id),
                                        dataPriority = priorityNext.dataset;
                                    if (dataPriority.id === String((soldierId))) {
                                        priorityNext.classList.add('hidden');
                                        break;
                                    }
                                }
                                break;
                            }

                        }
                    }
                    break;
                }
            }

            var currentId = Number(dataNext.id) + 1;
            var result = checkForNextSibling(currentId);
            var next = document.getElementById('next');
            var prev = document.getElementById('prev');
            prev.classList.remove('hidden');
            if (result) {
                // Прячем стрелочку
                next.classList.add('hidden');
            } else {
                next.classList.remove('hidden');
            }
        };

        /*"Клик на стрелку влево/вправо — переход на предыдущего/следующего персонажа на этом уровне."
        Задание сначала понял, как переходы между уровнями*/
        /*// переход на предыдущий уровень
        prev.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peoplePrev = document.querySelector('#soldier' + military[i].id),
                    dataPeople = peoplePrev.dataset;

                var soldier = Number(dataPeople.personId) - 1;
                var subordinate = soldier + 1;

                if (dataPeople.personId === String(parentArray[i])
                    && peoplePrev.classList.contains('hidden') === false) { // найти открытые объекты

                    for (i = 0; i < military.length; i++) {
                        var general = document.querySelector('#priority' + i),
                            dataGeneral = general.dataset;
                        var man = document.querySelector('#soldier' + military[i].id),
                            dataMan = man.dataset;

                        general.classList.add('hidden');
                        man.classList.add('hidden');

                        if (dataPeople.personId === String(subordinate)) {
                            if (general.id === 'priority0') {
                                if (dataPeople.personId === String(min + 1)) {
                                    prev.classList.add('hidden');
                                    next.classList.add('hidden');
                                } else {
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
                        var priorityPrev = document.querySelector('#priority' + i),
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

        //переход на следубщий уровень
        next.onclick = function () {
            for (i = 0; i < military.length; i++) {
                var peopleNext = document.querySelector('#soldier' + military[i].id),
                    dataNext = peopleNext.dataset;

                var soldier = Number(dataNext.personId);
                var subordinate = soldier + 1;

                if (dataNext.personId === String(military[i].parent)
                    && peopleNext.classList.contains('hidden') === false) { //найти открытые объекты

                    for (i = 0; i < military.length; i++) {
                        var general = document.getElementById('priority' + i);
                        var man = document.querySelector('#soldier' + military[i].id),
                            dataMan = man.dataset;

                        general.classList.add('hidden');
                        man.classList.add('hidden');

                        if (dataNext.personId === String(soldier)) {
                            if (dataNext.personId === String(max - 1)) {
                                prev.classList.remove('hidden');
                                next.classList.add('hidden');
                            } else {
                                prev.classList.remove('hidden');
                                next.classList.remove('hidden');
                            }
                            if (dataMan.personId === String(subordinate)) {
                                man.classList.remove('hidden');
                            }
                        }
                    }
                    for (i = 0; i < military.length; i++) {
                        var priorityPrev = document.querySelector('#priority' + i),
                            dataPriority = priorityPrev.dataset;
                        if (dataPriority.priorityId === String(soldier)) {
                            priorityPrev.classList.remove('hidden');
                            break;
                        }
                    }
                    break;
                }
            }
        };*/
    }
};





