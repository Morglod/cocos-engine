import { director } from '../../cocos/game';
import { cclegacy } from '@base/global';
import { ParticleSystem } from '../../exports/particle';
import { Node, Scene } from '../../cocos/scene-graph';

test('particle system material test', function () {
    const scene = new Scene('test');
    director.runSceneImmediate(scene);

    const temp0 = new Node();
    scene.addChild(temp0);

    const particle = temp0.addComponent(ParticleSystem) as ParticleSystem;
    expect(particle.sharedMaterials).toBeDefined();

    cclegacy.game.step();
});