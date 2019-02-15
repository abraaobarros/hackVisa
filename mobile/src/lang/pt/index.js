const string = {
    errors: {
        email_invalid: "Email inválido",
        credential_invalid: "Email ou senha inválido",
        tel_invalid: "O telefone precisa ter 8 ou 9 números",
        ddd_invalid: "O ddd tem que ter 2 números",
        empty_password: "Digite sua senha",
        one_letter_uppercase_password: "Use pelo menos uma letra maiúscula",
        validate_one_number: "Use pelo menos um número",
        validate_one_especial_letter: 'User pelo menos um caracter especial @#$%&',
        validate8digits: "Use pelo menos 8 digitos",
        email_not_exists: "Esse email não está na nossa base",
        user_unauthorized: "Seu usuário não está autorizado a usar a plataforma, fale com seu supervisor",
        user_already_exist: 'Esse usuário já está cadastrado',
        fail_request:"Requisição falhou, tente novamente mais tarde"
    },
    buttons: {
        send_title: "Enviar código",
        validate_code: "Validar o código"
    },
    inputs: {
        email_corporate: "Email corporativo",
        email_personal: "Email pessoal",
        password: "Senha",
        redefine_password: "Nova senha",
        job: "Departamento",
        name:"Nome completo"
    },
    titles: {
        create_user_title: "Cadastro",
        login_title: "Login",
        forgot_title: "Esqueceu a senha?",
        redefine_title: "Redefinir senha",
        code_validator_title: "Código de validação",
        select_headquarter: "Selecione a sede que você trabalha",
        choose_title_address: "Dê um nome ao seu endereço"
    },
    routinesOptions:[
        'Editar rotina',
        'Deletar rotina',
        'Cancelar'
    ],
    tutorial: [
        {
            title: 'Conheça o novo bynd',
            txt: 'Compartilhe caronas com colegas da sua rede de confiança de maneira simples, segura e ainda ganhe prêmios.',
            uri: require('../../../resources/img/start1.png')
        },
        {
            title: 'Segurança',
            txt: 'Apenas pessoas vinculadas a uma empresa, faculdade ou outra organização cadastrada podem participar. Vale para você também!',
            uri: require('../../../resources/img/start2.png')
        },
        {
            title: 'Praticidade',
            txt: 'Indique quando você gostaria de oferecer ou pegar uma carona e deixa que a gente encontra um colega da sua rede para compartilhar o trajeto.',
            uri: require('../../../resources/img/start3.png')
        },
        {
            title: 'Prêmios',
            txt: 'Acumule pontos a cada carona e troque por combustível, passagens aéreas e muito mais.',
            uri: require('../../../resources/img/start4.png')
        }
    ]
}

export const strings = {
    errors: {
        email_invalid: "Poxa, esse e-mail é inválido. ",
        credential_invalid: "Email ou senha inválido",
        tel_invalid: "O telefone precisa ter 9 números",
        ddd_invalid: "O ddd tem que ter 2 números",
        empty_password: "Digite sua senha",
        one_letter_uppercase_password: "Use pelo menos uma letra maiúscula",
        validate_one_number: "Use pelo menos um número",
        validate_one_especial_letter: 'User pelo menos um caracter especial @#$%&',
        validate8digits: "Use pelo menos 8 digitos",
        email_not_exists: "Esse email não está na nossa base",
        user_unauthorized: "Seu usuário não está autorizado a usar a plataforma, fale com seu supervisor",
        user_offline: "Você está offline, procure um local com internet",
        user_already_exist: 'Esse usuário já está cadastrado',
        fail_request:"Requisição falhou, tente novamente mais tarde",
        empty_field:"Ops! Você precisa preencher esse campo"
    },
    buttons: {
        send_title: "Enviar código",
        validate_code: "Validar",
        change_password_send: "Mudar senha"
    },
    inputs: {
        email_corporate: "E-mail corporativo *",
        email_personal: "Email pessoal *",
        password: "Senha *",
        redefine_password: "Nova senha *",
        job: "Departamento",
        name:"Nome completo *",
        tel:"Celular *",
        car_brand: "Marca: ex. Pálio Sedan 2017",
        car_color: "Cor: ex. Preto"
    },
    titles: {
        create_user_title: "Cadastro",
        login_title: "Login",
        forgot_title: "Esqueceu a senha?",
        redefine_title: "Redefinir senha",
        code_validator_title: "Código de validação",
        select_headquarter: "Selecione a sede que você trabalha",
        choose_title_address: "Dê um nome ao seu endereço",
        brand_car:"Agora qual o modelo do carro ?"

    },
    routinesOptions:[
        'Editar rotina',
        'Deletar rotina',
        'Cancelar'
    ],
    tutorial: [
        {
            title: 'Conheça o Argo',
            txt: ' Texto3 asdlaksdlad adlasdkasd asldkamsdlkasd alsdmlakmdad alskdmalsdm ',
            uri: require('../../../resources/img/logo.png')
        },
        {
            title: 'Segurança',
            txt: ' Texto3 asdlaksdlad adlasdkasd asldkamsdlkasd alsdmlakmdad alskdmalsdm ',
            uri: require('../../../resources/img/group2.png')
        },
        {
            title: 'Praticidade',
            txt: ' Texto3 asdlaksdlad adlasdkasd asldkamsdlkasd alsdmlakmdad alskdmalsdm ',
            uri: require('../../../resources/img/group3.png')
        },
        {
            title: 'Pague e receba de forma fácil',
            txt: 'PAgamentsda sd as da sd as da sd a sd a sdasd asdasd adasdos',
            uri: require('../../../resources/img/group4.png')
        }
    ]
}

