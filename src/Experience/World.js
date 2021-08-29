import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class World
{
    constructor(_options)
    {
        this.experience = window.experience
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setDonut()
            }
        })
    }

    setDonut()
    {
        const loader = new GLTFLoader()
        
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        loader.setDRACOLoader(dracoLoader)

        // Load a glTF resource
        loader.load(

            // resource URL
            '/models/donut.glb',

            // called when the resource is loaded
            function (gltf) {
                this.scene.add(gltf.scene)
            },

            // called while loading is progressing
            function (xhr) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
            },

            // called when loading has errors
            function (error) {
                console.log(error)
            }
        )
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}