ServerEvents.recipes(event => {
    //植物油
    event.remove({id:'createdieselgenerators:compacting/plant_oil'})
    //乙醇
    event.remove({id:'createdieselgenerators:basin_fermenting/fermentable'})
    event.remove({id:'createdieselgenerators:basin_fermenting/fermented_spider_eye'})
})