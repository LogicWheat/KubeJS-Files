ServerEvents.recipes(event => {
    const { create } = event.recipes
    const $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
    const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

    //LogicWheat
    event.smelting('logic:silicon','#forge:dusts/quartz')

    //机械动力 Create
    $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('create:chromatic_compound','create:refined_radiance'))
    $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('create:chromatic_compound','create:shadow_steel'))
    create.item_application('create:refined_radiance_casing',['minecraft:glass','create:refined_radiance'])
    create.item_application('create:shadow_steel_casing',['minecraft:obsidian','create:shadow_steel'])

    //通用机械 Mekanism
    event.remove({output:'mekanism:basic_control_circuit'})
    create.sequenced_assembly([
        'mekanism:basic_control_circuit'
    ],'create:precision_mechanism',[
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','minecraft:redstone']),
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','createaddition:capacitor']),
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','create:electron_tube']),
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','#forge:wires/gold']),
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','logic:silicon']),
        create.pressing('logic:incomplete_basic_control_circuit','logic:incomplete_basic_control_circuit')
    ]).transitionalItem('logic:incomplete_basic_control_circuit').loops(2)
    event.remove({output:'mekanism:teleporter'})
    event.remove({output:'mekanism:portable_teleporter'})
    event.remove({output:'mekanism:teleporter_frame'})

    //Ad Astra!
    //删除与mek重复物品
    event.remove({output:'ad_astra:steel_cable'})
    event.remove({output:'ad_astra:desh_cable'})
    event.remove({output:'ad_astra:desh_fluid_pipe'})
    event.remove({output:'ad_astra:ostrum_fluid_pipe'})
    event.remove({output:'ad_astra:cable_duct'})
    event.remove({output:'ad_astra:fluid_pipe_duct'})
    event.remove({output:'ad_astra:coal_generator'})
    event.remove({output:'ad_astra:compressor'})
    event.remove({output:'ad_astra:etrionic_blast_furnace'})
    event.remove({output:'ad_astra:fuel_refinery'})
    event.remove({output:'ad_astra:oxygen_loader'})
    event.remove({output:'ad_astra:solar_panel'})
    event.remove({output:'ad_astra:water_pump'})
    event.remove({output:'ad_astra:energizer'})
    event.remove({output:'ad_astra:cryo_freezer'})
    event.remove({output:'ad_astra:etrionic_capacitor'})
    event.remove({output:'ad_astra:photovoltaic_etrium_cell'})
    event.remove({output:'ad_astra:wrench'})
    //配方更改
    event.remove({output:'ad_astra:tier_1_rover'})
    event.remove({output:'ad_astra:wheel'})
    create.mechanical_crafting('ad_astra:tier_1_rover',[
        'WTCHW',
        'SEDAO',
        'WTCRW'
    ],{
        W:'trackwork:simple_wheel',
        T:'create:fluid_tank',
        C:'#interiors:chairs',
        H:'clockworkadditions:handlebar',
        S:'#forge:chests/wooden',
        E:'createdieselgenerators:diesel_engine',
        D:'ad_astra:desh_block',
        A:'mekanism:advanced_control_circuit',
        O:'ad_astra:radio',
        R:'create_things_and_misc:radar'
    })

    //CC: Tweaked
    event.replaceInput({output:'computercraft:computer_normal'},'minecraft:redstone','mekanism:advanced_control_circuit')
    event.replaceInput({output:'computercraft:computer_normal'},'#forge:stone','create:andesite_alloy')
    event.replaceInput({output:'computercraft:computer_advanced'},'minecraft:redstone','mekanism:ultimate_control_circuit')
    event.replaceInput({output:'computercraft:computer_advanced'},'minecraft:gold_ingot','create:brass_ingot')
    event.remove({id:'computercraft:computer_advanced_upgrade'})
    event.shaped('computercraft:computer_advanced',[
        'BBB',
        'BCB',
        'BUB'
    ],{
        B:'create:brass_ingot',
        C:'computercraft:computer_normal',
        U:'mekanism:ultimate_control_circuit'
    })
    event.remove({output:'computercraft:pocket_computer_normal'})
    event.remove({output:'computercraft:pocket_computer_advanced'})
    create.pressing('computercraft:pocket_computer_normal','computercraft:computer_normal')
    create.pressing('computercraft:pocket_computer_advanced','computercraft:computer_advanced')

    //通量网络 Flux Networks
    create.mixing('2x fluxnetworks:flux_dust',['minecraft:redstone','#forge:dusts/obsidian']).heated()

    //微型红石 Tiny Redstone
    event.remove({output:'tinyredstone:silicon_compound'})
    event.remove({output:'tinyredstone:silicon'})
    event.replaceInput({input:'tinyredstone:silicon'},'tinyredstone:silicon','logic:silicon')

    //机械动力：实用物品 Create Utilities
    event.remove({output:'createutilities:void_motor'})
    event.remove({output:'createutilities:void_battery'})

    //虚空动力 VoidPower
    event.shaped('void_power:vr_glasses',[
        '   ',
        'SGS',
        '   '
    ],{
        S:'void_power:glass_screen',
        G:'create:goggles'
    })
    create.mechanical_crafting('void_power:hologram',[
        ' SSS ',
        'QGPGQ',
        'QECEQ',
        'QABAQ',
        ' OOO '
    ],{
        S:'void_power:glass_screen',
        Q:'minecraft:quartz_block',
        G:'createutilities:graviton_tube',
        P:'mekanismadditions:light_blue_glow_panel',
        E:'create:electron_tube',
        C:'#forge:circuits/ultimate',
        A:'mekanism:alloy_atomic',
        B:'#forge:ingots/brass',
        O:'minecraft:obsidian'
    })

    //整活
    create.mechanical_crafting('create:creative_motor',[
        'CCCCCCCCC',
        'CSSHHHSSC',
        'CSH O HSC',
        'CH RDR HC',
        'CHODBDOHC',
        'CH RDR HC',
        'CSH O HSC',
        'CSSHHHSSC',
        'CCCCCCCCC'
    ],{
        C:'create:encased_chain_drive',
        S:'create:shaft',
        H:'create:hand_crank',
        D:'create:deployer',
        B:'create:mechanical_bearing',
        R:'create:creative_motor',
        O:'minecraft:command_block'
    })
})