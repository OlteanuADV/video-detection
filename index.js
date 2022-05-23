const tf = require('@tensorflow/tfjs-node');
const nsfw = require('nsfwjs');
const axios = require('axios');

async function loading() {
    const model = await nsfw.load();
    const pic = await axios.get(`link`, {
        responseType: 'arraybuffer',
    });
    const image = await tf.node.decodeImage(pic.data,3);
    const predictions = await model.classify(image);
    image.dispose();
    console.log(predictions);
}

loading();