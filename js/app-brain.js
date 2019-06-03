var nke_palette = ["nke_blue", "nke_magenta", "nke_yellow", "nke_green", "nke_red", 
                   "nke_purple", "nke_chartreuse", "nke_orange", "nke_pink", "nke_brown", 
                   "nke_cyan", "nke_crimson", "nke_gold", "nke_teal", "nke_indigo", 
                   "nke_lobster", "nke_olive", "nke_lime", "nke_sky", "nke_fuschia", 
                   "nke_violet", "nke_tan", "nke_berry", "nke_mint"]

var names = {2: ['Arousal', 'Manipulation'],
             3: ['Arousal', 'Manipulation', 'Language'],
             4: ['Memory', 'Reaction Time', 'Vision', 'Hearing'],
             5: ['Memory', 'Reaction Time', 'Manipulation', 'Vision', 'Language'],
             6: ['Memory', 'Reward', 'Reaction Time', 'Manipulation', 'Vision', 'Language'],
             7: ['Emotion', 'Anticipation', 'Cognitive Process', 'Manipulation', 'Vision', 'Hearing', 'Word'],
             8: ['Memory', 'Episodic Memory', 'Emotion', 'Reaction Time', 'Manipulation', 'Vision', 'Hearing', 'Language'],
             9: ['Episodic Memory', 'Reward', 'Anticipation', 'Arousal', 'Manipulation', 'Memory', 'Vision', 'Hearing', 'Language'],
             10: ['Memory', 'Reward', 'Arousal', 'Cognitive', 'Manipulation', 'Episodic Memory', 'Recall', 'Vision', 'Hearing', 'Language'],
             11: ['Memory', 'Episodic Memory', 'Emotion', 'Decision Making', 'Anticipation', 'Arousal', 'Manipulation', 'Vision', 'Hearing', 'Language', 'Meaning'],
             12: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Anticipation', 'Arousal', 'Pain', 'Cognitive Process', 'Execution', 'Vision', 'Hearing', 'Language'],
             13: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Cognitive Process', 'Manipulation', 'Retrieval', 'Vision', 'Hearing', 'Speech', 'Language'],
             14: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Cognitive Process', 'Manipulation', 'Execution', 'Vision', 'Hearing', 'Speech', 'Language'],
             15: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Anticipation', 'Arousal', 'Cognitive Process', 'Monitoring', 'Representation', 'Working Memory', 'Vision', 'Hearing', 'Language'],
             16: ['Memory', 'Episodic Memory', 'Emotion', 'Recognition Memory', 'Reward', 'Reward Processing', 'Anticipation', 'Arousal', 'Cognitive Control', 'Preparation', 'Manipulation', 'Vision', 'Hearing', 'Language', 'Word', 'Meaning'],
             17: ['Memory', 'Episodic Memory', 'Retrieval', 'Recall', 'Recognition', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Cognitive Process', 'Preparation', 'Manipulation', 'Vision', 'Hearing', 'Speech', 'Language', 'Word'],
             18: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Recognition', 'Emotion', 'Reward', 'Decision Making', 'Anticipation', 'Arousal', 'Reaction Time', 'Manipulation', 'Execution', 'Vision', 'Hearing', 'Speech', 'Language', 'Language Processing'],
             19: ['Memory', 'Episodic Memory', 'Recall', 'Recognition', 'Emotion', 'Reward', 'Decision Making', 'Anticipation', 'Retrieval', 'Arousal', 'Pain', 'Cognitive', 'Manipulation', 'Vision', 'Hearing', 'Listening', 'Speech', 'Language', 'Word'],
             20: ['Memory', 'Episodic Memory', 'Encoding', 'Retrieval', 'Recall', 'Recognition', 'Emotion', 'Reward', 'Anticipation', 'Arousal', 'Cognitive Process', 'Cognitive Control', 'Execution', 'Manipulation', 'Hand', 'Thought', 'Vision', 'Hearing', 'Language', 'Word'],
             21: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Reward Processing', 'Anticipation', 'Salience', 'Arousal', 'Reaction Time', 'Context', 'Cognitive', 'Manipulation', 'Execution', 'Motor Control', 'Vision', 'Hearing', 'Speech', 'Language', 'Word'],
             22: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Recognition', 'Encoding', 'Feedback', 'Fear', 'Emotion', 'Reward', 'Reward Processing', 'Anticipation', 'Arousal', 'Cognitive Process', 'Execution', 'Cognitive Control', 'Vision', 'Hearing', 'Speech', 'Language', 'Language Processing', 'Word'],
             23: ['Memory', 'Episodic Memory', 'Recall', 'Recognition', 'Familiarity', 'Remembering', 'Encoding', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Anticipation', 'Arousal', 'Salience', 'Cognitive Process', 'Preparation', 'Vision', 'Hearing', 'Listening', 'Speech', 'Language', 'Word', 'Meaning'],
             24: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Encoding', 'Recognition', 'Feedback', 'Fear', 'Emotion', 'Mood', 'Reward', 'Reward Processing', 'Decision Making', 'Anticipation', 'Arousal', 'Reaction Time', 'Execution', 'Manipulation', 'Perception', 'Vision', 'Hearing', 'Language', 'Word', 'Semantic Processing'],
             25: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Remembering', 'Recognition', 'Encoding', 'Feedback', 'Fear', 'Emotion', 'Reward', 'Reward Processing', 'Anticipation', 'Arousal', 'Cognitive Process', 'Manipulation', 'Vision', 'Execution', 'Social Cognition', 'Hearing', 'Speech', 'Language', 'Language Processing', 'Word', 'Meaning']}

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
                        'opacity': 0.5,
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