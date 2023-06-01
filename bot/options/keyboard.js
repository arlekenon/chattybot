const {Markup} = require("telegraf");
module.exports = {
    roleOptions: {
        '':'',
        'Обычный':'',
        'Фитнес тренер':'Представь что ты фитнес тренер ',
        'Учитель':'Представь что ты учитель ',
        'Весельчак':'Представь что ты развлекательный собеседник ',
        'Виртуальный гид':'Представь что ты виртуальный гид ',
        'Консультант':'Представь что ты консультант ',
        'Психолог':'Представь что ты психолог ',
        'Программист':'Представь что ты программист ',
        'Текстовый редактор':'Представь что ты текстовый редактор ',
    },

    nastOptions: {
        '':'',
        'Обычный':'',
        'Креатавный':'Представь себя в криативном настроении, сейчас я напишу фразу отвечай на нее сразу в криативном настроении фраза: ',
        'Весёлый':'Представь себя в весёлом настроении, сейчас я напишу фразу отвечай на нее сразу в весёлом настроении фраза: ',
        'Грустный':'Представь себя в грустном настроении, сейчас я напишу фразу отвечай на нее сразу в грустном настроении фраза: ',
        'Злой':'Представь себя в злом настроении, сейчас я напишу фразу отвечай на нее сразу в злом настроении фраза: ',
        'Меланхоличный стёб':'Представь себя в настроении меланхоличного стёба, сейчас я напишу фразу отвечай на нее сразу в настроении меланхоличного стёба фраза: '
    },

    keyOptions: {
        reply_markup: JSON.stringify({
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ["Начать чат💭"],
                ["Выбрать персонажа😜", "Выбрать настроение🧐", "О боте ❤"],
                ["Возможности💫", "Премиум💎"],
            ]
        })
    },
    iionkeyOptions: {
        reply_markup: JSON.stringify({
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ["Выключить ChatGPT"]
            ]
        })
    },

    addvOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                // [{text: '🟥', callback_data:'🟥'},{text: '🟧', callback_data:'🟧'},{text: '🟨', callback_data:'🟨'},{text: '🟩', callback_data:'🟩'},{text: '🟦', callback_data:'🟦'},{text: '🟪', callback_data:'🟪'},{text: '⬛️', callback_data:'⬛️'},{text: '⬜️', callback_data:'⬜️'},{text: '🟫', callback_data:'🟫'}],
                [{text: '♠️', callback_data:'♠️'},{text: '♣️', callback_data:'♣️'},{text: '♥️', callback_data:'♥️'},{text: '♦️', callback_data:'♦️'},{text: '🃏', callback_data:'🃏'},{text: '🎴', callback_data:'🎴'},{text: '🀄️', callback_data:'🀄️'},{text: '🔳', callback_data:'🔳'},{text: '🔲', callback_data:'🔲'}]
                // [{text: 'Меланхоличный стёб', callback_data:'Меланхоличный стёб'}],
                //  [{text: 'Острота', callback_data:'Острота'}],//[{text: 'Юмор', callback_data:'Юмор'}],
                // [{text: 'Флирт', callback_data:'Флирт'}],
                // [{text: 'Смайлики', callback_data:'Смайлики'}]
            ]
        })
    },

    addtOptions: {
        '♠️':' Улучши текст, добавь ♠️ настроения.',
        '♣️':' Улучши текст, добавь ♣️ настроения.',
        '♥️':' Улучши текст, добавь ♥️ настроения.',
        '♦️':' Улучши текст, добавь ♦️ настроения.',
        '🃏':' Улучши текст, добавь 🃏 настроения.',
        '🎴':' Улучши текст, добавь 🎴 настроения.',
        '🀄️':' Улучши текст, добавь 🀄️ настроения.',
        '🔳':' Улучши текст, добавь 🔳 настроения.',
        '🔲':' Улучши текст, добавь 🔲 настроения.',
        '🟥':' Улучши текст, добавь 🟥 настроения.',
        '🟧':' Улучши текст, добавь 🟧 настроения.',
        '🟨':' Улучши текст, добавь 🟨 настроения.',
        '🟩':' Улучши текст, добавь 🟩 настроения.',
        '🟦':' Улучши текст, добавь 🟦 настроения.',
        '🟪':' Улучши текст, добавь 🟪 настроения.',
        '⬛️':' Улучши текст, добавь ⬛️ настроения.',
        '⬜️':' Улучши текст, добавь ⬜️ настроения.',
        '🟫':' Улучши текст, добавь 🟫 настроения.',
        'Меланхоличный стёб':' Улучши текст, добавь меланхоличного стёба.',
        'Острота':' Улучши текст, добавь остроты.',
        'Юмор':' Улучши текст, добавь юмора.',
        'Флирт':' Улучши текст, добавь флирта.',
        'Смайлики':' Улучши текст, добавь смайликов.',
    },

    colorOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '', callback_data:'Добавь меланхоличного стёба'},{text: 'Острота', callback_data:'Добавь остроты'}],
            ]
        })
    },

    persOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Обычный', callback_data:'Обычный'}],
                [{text: 'Фитнес тренер', callback_data:'Фитнес тренер'}],
                [{text: 'Учитель', callback_data:'Учитель'}],
                [{text: 'Весельчак', callback_data:'Весельчак'}],
                [{text: 'Виртуальный гид', callback_data:'Виртуальный гид'}],
                [{text: 'Консультант', callback_data:'Консультант'}],
                [{text: 'Психолог', callback_data:'Психолог'}],
                [{text: 'Программист', callback_data:'Программист'}],
                [{text: 'Текстовый редактор', callback_data:'Текстовый редактор'}]
            ]
        })
    },

    premOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '69₽', callback_data:'69'},{text: '219₽', callback_data:'219'},{text: '499₽', callback_data:'499'}]
        ]
        })
    },

    remopOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
             //   [Markup.button.callback("Отправить заявку", "otprzav"),Markup.button.callback("За крипту", "cripto")]
                [{text: 'Отправить заявку', callback_data:'otprzav'},{text: 'Крипто', callback_data:'cripto'}]
            ]
        })
    },

    refOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Вывести', callback_data:'Вывести'},{text: 'В основное меню', callback_data:'В основное меню'}]
            ]
        })
    },


    vibeOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Обычный', callback_data:'Обычный'}],
                [{text: 'Креативный', callback_data:'Креативный'}],
                [{text: 'Весёлый', callback_data:'Весёлый'}],
                [{text: 'Грустный', callback_data:'Грустный'}],
                [{text: 'Злой', callback_data:'Злой'}],
                [{text: 'Меланхоличный стёб', callback_data:'Меланхоличный стёб'}]
            ]
        })
    },



    numbOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '1', callback_data:'1'},{text: '2', callback_data:'2'},{text: '3', callback_data:'3'}],
                [{text: '4', callback_data:'4'},{text: '5', callback_data:'5'},{text: '6', callback_data:'6'}],
                [{text: '7', callback_data:'7'},{text: '8', callback_data:'8'},{text: '9', callback_data:'9'}],
                [{text: '0', callback_data:'0'}]
            ]
        })
    },

    againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Ещё раз', callback_data:'/again'}],
            ]
        })
    }
}
