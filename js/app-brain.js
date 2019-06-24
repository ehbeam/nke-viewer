
var nke_palette = ["nke_blue", "nke_magenta", "nke_yellow", "nke_green", "nke_red", 
                   "nke_purple", "nke_chartreuse", "nke_orange", "nke_pink", "nke_brown", 
                   "nke_slate", "nke_crimson", "nke_gold", "nke_teal", "nke_indigo", 
                   "nke_lobster", "nke_olive", "nke_lime", "nke_sky", "nke_fuschia", 
                   "nke_violet", "nke_tan", "nke_berry", "nke_mint", "nke_sun"]

var names = {2: ['Arousal', 'Manipulation'], 
3: ['Arousal', 'Manipulation', 'Language'], 
4: ['Memory', 'Arousal', 'Vision', 'Hearing'], 
5: ['Memory', 'Arousal', 'Manipulation', 'Vision', 'Hearing'], 
6: ['Memory', 'Reward', 'Reaction Time', 'Manipulation', 'Vision', 'Hearing'], 
7: ['Emotion', 'Reward', 'Cognitive', 'Manipulation', 'Vision', 'Hearing', 'Meaning'], 
8: ['Memory', 'Episodic Memory', 'Arousal', 'Cognitive Process', 'Manipulation', 'Vision', 'Perception', 'Language'], 
9: ['Memory', 'Reward', 'Anticipation', 'Cognitive Process', 'Manipulation', 'Vision', 'Word', 'Perception', 'Language'], 
10: ['Memory', 'Reward', 'Arousal', 'Cognitive', 'Manipulation', 'Episodic Memory', 'Recall', 'Vision', 'Perception', 'Language'], 
11: ['Memory', 'Episodic Memory', 'Emotion', 'Cognitive', 'Anticipation', 'Arousal', 'Manipulation', 'Vision', 'Hearing', 'Language', 'Cognitive Process'], 
12: ['Memory', 'Episodic Memory', 'Valence', 'Reward', 'Anticipation', 'Emotion', 'Arousal', 'Cognition', 'Manipulation', 'Vision', 'Hearing', 'Language'], 
13: ['Memory', 'Episodic Memory', 'Emotion', 'Decision Making', 'Reward', 'Arousal', 'Cognitive', 'Manipulation', 'Recall', 'Vision', 'Perception', 'Hearing', 'Language'], 
14: ['Memory', 'Retrieval', 'Episodic Memory', 'Decision Making', 'Reward', 'Arousal', 'Salience', 'Cognitive', 'Manipulation', 'Hand', 'Vision', 'Perception', 'Language', 'Emotion'], 
15: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Valence', 'Reward', 'Anticipation', 'Emotion', 'Cognition', 'Arousal', 'Manipulation', 'Cognitive', 'Vision', 'Hearing', 'Language'], 
16: ['Memory', 'Episodic Memory', 'Emotion', 'Retrieval', 'Reward', 'Anticipation', 'Arousal', 'Thought', 'Cognitive', 'Preparation', 'Vision', 'Recognition', 'Perception', 'Language', 'Word', 'Meaning'], 
17: ['Memory', 'Episodic Memory', 'Retrieval', 'Recall', 'Recognition', 'Arousal', 'Anticipation', 'Reward', 'Emotion', 'Cognitive', 'Preparation', 'Vision', 'Familiarity', 'Hearing', 'Language', 'Meaning', 'Representation'], 
18: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Word', 'Emotion', 'Decision Making', 'Cognitive', 'Reward', 'Arousal', 'Cognitive Process', 'Manipulation', 'Execution', 'Vision', 'Hearing', 'Language', 'Speech', 'Meaning'], 
19: ['Memory', 'Episodic Memory', 'Recall', 'Recognition', 'Fear', 'Reward', 'Reaction Time', 'Anticipation', 'Retrieval', 'Emotion', 'Arousal', 'Cognitive', 'Manipulation', 'Vision', 'Hearing', 'Language Processing', 'Speech', 'Language', 'Word'], 
20: ['Memory', 'Episodic Memory', 'Familiarity', 'Retrieval', 'Recall', 'Encoding', 'Emotion', 'Reward', 'Anticipation', 'Arousal', 'Cognitive Process', 'Cognitive', 'Execution', 'Manipulation', 'Preparation', 'Thought', 'Vision', 'Hearing', 'Language', 'Meaning'], 
21: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Anticipation', 'Salience', 'Arousal', 'Attention', 'Context', 'Cognitive', 'Manipulation', 'Execution', 'Motor Control', 'Vision', 'Hearing', 'Word', 'Language', 'Meaning'], 
22: ['Memory', 'Episodic Memory', 'Recall', 'Remembering', 'Recognition', 'Retrieval', 'Feedback', 'Fear', 'Emotion', 'Reward', 'Decision Making', 'Anticipation', 'Arousal', 'Cognitive', 'Manipulation', 'Cognitive Process', 'Vision', 'Perception', 'Language', 'Hearing', 'Word', 'Meaning'], 
23: ['Memory', 'Episodic Memory', 'Recall', 'Recognition', 'Familiarity', 'Encoding', 'Remembering', 'Retrieval', 'Fear', 'Reward', 'Decision Making', 'Anticipation', 'Arousal', 'Emotion', 'Cognitive', 'Preparation', 'Vision', 'Perception', 'Hearing', 'Language', 'Word', 'Meaning', 'Manipulation'], 
24: ['Memory', 'Episodic Memory', 'Retrieval', 'Recall', 'Encoding', 'Recognition', 'Feedback', 'Pain', 'Emotion', 'Salience', 'Reward', 'Decision Making', 'Valence', 'Anticipation', 'Arousal', 'Reaction Time', 'Execution', 'Cognitive Process', 'Perception', 'Vision', 'Speech', 'Language', 'Manipulation', 'Word'], 
25: ['Memory', 'Episodic Memory', 'Encoding', 'Retrieval', 'Familiarity', 'Recognition', 'Recall', 'Feedback', 'Fear', 'Emotion', 'Reward', 'Decision Making', 'Anticipation', 'Arousal', 'Cognitive', 'Manipulation', 'Vision', 'Preparation', 'Social Cognition', 'Perception', 'Language', 'Hearing', 'Language Processing', 'Meaning', 'Word']}

function pad(number) { return (number < 10 ? '0' : '') + number };

function loadBrainMap(k) {

    viewer = new Viewer('#layer_list', '.layer_settings');
    viewer.addView('#view_axial', Viewer.AXIAL);
    viewer.addView('#view_coronal', Viewer.CORONAL);
    viewer.addView('#view_sagittal', Viewer.SAGITTAL);
    viewer.addSlider('opacity', '.slider#opacity', 'horizontal', 0, 1, 1, 0.05);
    viewer.addSlider("nav-xaxis", ".slider#nav-xaxis", "horizontal", 0, 1, 0.5, 0.01, Viewer.XAXIS);
    viewer.addSlider("nav-yaxis", ".slider#nav-yaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.YAXIS);
    viewer.addSlider("nav-zaxis", ".slider#nav-zaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.ZAXIS);
    viewer.clear()   // Paint canvas background while images load
    
    images = [{
                'url': 'data/MNI152_T1_2mm_brain.nii.gz',
                'name': 'MNI152',
                'colorPalette': 'grayscale',
                'cache': false,
            }];
    viewer.loadImages(images);

    images = [{
                'url': 'data/MNI152_T1_2mm_brain.nii.gz',
                'name': 'MNI152',
                'colorPalette': 'grayscale',
                'cache': false,
            }];

    for (i = 1; i < k + 1; i++) {
        images.push({
                        'url': 'data/k' + pad(k) + '/circuit_k' + pad(k) + '_dom' + pad(i) + '.nii.gz',
                        'name': names[k][i-1],
                        'colorPalette': nke_palette[i-1],
                        'opacity': 0.6,
                        'cache': false
                    })
        };
    viewer.loadImages(images);

    //document.getElementById('selected').background = "red";
};

jQuery(document).ready(function() {

    viewer = new Viewer('#layer_list', '.layer_settings');
    viewer.addView('#view_axial', Viewer.AXIAL);
    viewer.addView('#view_coronal', Viewer.CORONAL);
    viewer.addView('#view_sagittal', Viewer.SAGITTAL);
    viewer.addSlider('opacity', '.slider#opacity', 'horizontal', 0, 1, 1, 0.05);
    viewer.addSlider("nav-xaxis", ".slider#nav-xaxis", "horizontal", 0, 1, 0.5, 0.01, Viewer.XAXIS);
    viewer.addSlider("nav-yaxis", ".slider#nav-yaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.YAXIS);
    viewer.addSlider("nav-zaxis", ".slider#nav-zaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.ZAXIS);
    viewer.clear()   // Paint canvas background while images load
    
    images = [{
                'url': 'data/MNI152_T1_2mm_brain.nii.gz',
                'name': 'MNI152',
                'colorPalette': 'grayscale',
                'cache': false,
            }];
    viewer.loadImages(images);

});