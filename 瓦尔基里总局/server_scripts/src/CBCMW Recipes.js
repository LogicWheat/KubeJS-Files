ServerEvents.recipes( event => {
    const { create } = event.recipes
    //紧凑型火炮底座
    event.shaped('cbcmodernwarfare:compact_mount',[
        ' P ',
        'SAS',
        'GPG'
    ],{
        P:'#forge:plates/iron',
        S:'create:shaft',
        A:'create:andesite_casing',
        G:'minecraft:gunpowder'
    })
    //已填充的中弹药
    event.shapeless('cbcmodernwarfare:filled_mediumcannon_cartridge', 
        ['createbigcannons:big_cartridge_sheet', '3x createbigcannons:nitropowder'])
    event.shapeless('cbcmodernwarfare:filled_mediumcannon_cartridge', 
        ['cbcmodernwarfare:empty_mediumcannon_cartridge', '3x createbigcannons:nitropowder'])
    //空弹壳
    event.shapeless('cbcmodernwarfare:empty_mediumcannon_cartridge', 
        ['createbigcannons:big_cartridge_sheet'])

    //大弹头转换中弹头
    //AP
    event.shapeless('cbcmodernwarfare:ap_mediumcannon_round', 
        ['createbigcannons:ap_shot'])
    //APHE
    event.shapeless('cbcmodernwarfare:aphe_mediumcannon_round', 
        ['createbigcannons:ap_shell'])
    //APDS
    event.shapeless('cbcmodernwarfare:apds_mediumcannon_round', 
        ['cbcmodernwarfare:apds_shot'])
    //榴霰弹
    event.shapeless('cbcmodernwarfare:canister_mediumcannon_round', 
        ['createbigcannons:shrapnel_shell'])
    //HE
    event.shapeless('cbcmodernwarfare:he_mediumcannon_round', 
        ['createbigcannons:he_shell'])
    //HEAT
    event.shapeless('cbcmodernwarfare:heap_mediumcannon_round', 
        ['cbcmodernwarfare:heap_shell'])
    //烟雾弹
    event.shapeless('cbcmodernwarfare:smoke_mediumcannon_round', 
        ['createbigcannons:smoke_shell'])
    
    //中弹头转换大弹头
    //AP
    event.shapeless('createbigcannons:ap_shot', 
        ['cbcmodernwarfare:ap_mediumcannon_round'])
    //APHE
    event.shapeless('createbigcannons:ap_shell', 
        ['cbcmodernwarfare:aphe_mediumcannon_round'])
    //APDS
    event.shapeless('cbcmodernwarfare:apds_shot', 
        ['cbcmodernwarfare:apds_mediumcannon_round'])
    //榴霰弹
    event.shapeless('createbigcannons:shrapnel_shell', 
        ['cbcmodernwarfare:canister_mediumcannon_round'])
    //HE
    event.shapeless('createbigcannons:he_shell', 
        ['cbcmodernwarfare:he_mediumcannon_round'])
    //HEAT
    event.shapeless('cbcmodernwarfare:heap_shell', 
        ['cbcmodernwarfare:heap_mediumcannon_round'])
    //烟雾弹
    event.shapeless('createbigcannons:smoke_shell', 
        ['cbcmodernwarfare:smoke_mediumcannon_round'])

    //合成
    //HEAT
    event.shaped('cbcmodernwarfare:heap_shell',[
        'ICI',
        'ITI',
        'IWI'
    ],{
        I: '#forge:ingots/iron',
        C: 'minecraft:copper_ingot',
        T: 'minecraft:tnt',
        W: '#minecraft:wooden_slabs'
    })
    //APDS
    create.mechanical_crafting('cbcmodernwarfare:apds_shot',[
        ' S ',
        'ISI',
        'ISI',
        ' W '
    ],{
        I: '#forge:ingots/iron',
        S: '#forge:ingots/steel',
        W: '#minecraft:wooden_slabs'
    })
    //APFSDS
    create.mechanical_crafting('cbcmodernwarfare:apfsds_mediumcannon_round',[
        ' N ',
        'INI',
        'INI',
        ' N ',
        'S S'
    ],{
        I: '#forge:ingots/iron',
        N: 'createbigcannons:nethersteel_ingot',
        S: '#forge:ingots/steel'
    })
    //HE-F
    create.mechanical_crafting('cbcmodernwarfare:hefrag_shell',[
        'I I',
        'I I',
        'ITI',
        ' W '
    ],{
        I: '#forge:ingots/iron',
        T: 'minecraft:tnt',
        W: '#minecraft:wooden_slabs'
    })
    //普通装甲系列
    //碳素钢
    create.mixing('cbcmodernwarfare:carbon_steel_block',[
        '#minecraft:coals',
        '#forge:ingots/steel',
        '#forge:ingots/steel',
        '#forge:ingots/steel',
        '#forge:ingots/steel',
        '#forge:ingots/steel',
        '#forge:ingots/steel',
        '#forge:ingots/steel',
        '#forge:ingots/steel'
    ]).heated()
    event.shaped('4x cbcmodernwarfare:carbon_steel_stairs',[
        'E  ',
        'EE ',
        'EEE'
    ],{
        E: 'cbcmodernwarfare:carbon_steel_block',
    })
    event.shaped('6x cbcmodernwarfare:carbon_steel_slab',[
        'EEE'
    ],{
        E: 'cbcmodernwarfare:carbon_steel_block',
    })
    //NERA
    create.compacting('cbcmodernwarfare:composite_block',['cbcmodernwarfare:carbon_steel_block','cbcmodernwarfare:carbon_steel_block'])
    //爆炸反应装甲（ERA）系列
    //ERA
    event.shaped('4x cbcmodernwarfare:era_block',[
        'III',
        'GGG',
        'III'
    ],{
        I: 'create:iron_sheet',
        G: 'minecraft:gunpowder'
    })
    event.shaped('4x cbcmodernwarfare:era_stairs',[
        'E  ',
        'EE ',
        'EEE'
    ],{
        E: 'cbcmodernwarfare:era_block'
    })
    event.shaped('6x cbcmodernwarfare:era_slab',[
        'EEE'
    ],{
        E: 'cbcmodernwarfare:era_block'
    })
    event.shaped('6x cbcmodernwarfare:era_vertical_slab',[
        'E  ',
        'E  ',
        'E  '
    ],{
        E: 'cbcmodernwarfare:era_block'
    })
    //绿色ERA
    event.shaped('8x cbcmodernwarfare:green_era_block',[
        'EEE',
        'EGE',
        'EEE'
    ],{
        E: 'cbcmodernwarfare:era_block',
        G: 'minecraft:green_dye'
    })
    event.shaped('4x cbcmodernwarfare:green_era_stairs',[
        'E  ',
        'EE ',
        'EEE'
    ],{
        E: 'cbcmodernwarfare:green_era_block'
    })
    event.shaped('6x cbcmodernwarfare:green_era_slab',[
        'EEE'
    ],{
        E: 'cbcmodernwarfare:green_era_block'
    })
    event.shaped('6x cbcmodernwarfare:green_era_vertical_slab',[
        'E  ',
        'E  ',
        'E  '
    ],{
        E: 'cbcmodernwarfare:green_era_block'
    })
    //黄色ERA
    event.shaped('8x cbcmodernwarfare:tan_era_block',[
        'EEE',
        'EYE',
        'EEE'
    ],{
        E: 'cbcmodernwarfare:era_block',
        Y: 'minecraft:yellow_dye'
    })
    event.shaped('4x cbcmodernwarfare:tan_era_stairs',[
        'E  ',
        'EE ',
        'EEE'
    ],{
        E: 'cbcmodernwarfare:tan_era_block'
    })
    event.shaped('6x cbcmodernwarfare:tan_era_slab',[
        'EEE'
    ],{
        E: 'cbcmodernwarfare:tan_era_block'
    })
    event.shaped('6x cbcmodernwarfare:tan_era_vertical_slab',[
        'E  ',
        'E  ',
        'E  '
    ],{
        E: 'cbcmodernwarfare:tan_era_block'
    })
})