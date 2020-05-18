
var nke_palette = ['nke_blue', 'nke_vermillion', 'nke_yellow', 'nke_purple', 'nke_green', 'nke_gold', 'nke_teal', 'nke_red', 'nke_chartreuse', 'nke_lavendar', 'nke_lime', 'nke_orange', 'nke_indigo', 'nke_magenta', 'nke_brown', 'nke_dark_blue', 'nke_dark_vermillion', 'nke_dark_yellow', 'nke_dark_purple', 'nke_dark_green', 'nke_dark_gold', 'nke_dark_teal', 'nke_dark_red', 'nke_dark_chartreuse', 'nke_dark_lavendar', 'nke_dark_lime', 'nke_dark_orange', 'nke_dark_indigo', 'nke_dark_magenta', 'nke_dark_brown', 'nke_light_blue', 'nke_light_vermillion', 'nke_light_yellow', 'nke_light_purple', 'nke_light_green', 'nke_light_gold', 'nke_light_teal', 'nke_light_red', 'nke_light_chartreuse', 'nke_light_lavendar', 'nke_light_lime', 'nke_light_orange', 'nke_light_indigo', 'nke_light_magenta', 'nke_light_brown', 'nke_darker_blue', 'nke_darker_vermillion', 'nke_darker_yellow', 'nke_darker_purple', 'nke_darker_green', 'nke_darker_gold', 'nke_darker_teal', 'nke_darker_red', 'nke_darker_chartreuse', 'nke_darker_lavendar', 'nke_darker_lime', 'nke_darker_orange', 'nke_darker_indigo', 'nke_darker_magenta', 'nke_darker_brown']

var names = {
                2: ['Arousal', 'Manipulation'],
                3: ['Arousal', 'Manipulation', 'Language'],
                4: ['Memory', 'Arousal', 'Vision', 'Hearing'],
                5: ['Memory', 'Reward', 'Cognition', 'Vision', 'Hearing'],
                6: ['Memory', 'Reward', 'Cognition', 'Vision', 'Manipulation', 'Language'],
                7: ['Memory', 'Emotion', 'Reward', 'Reaction Time', 'Vision', 'Manipulation', 'Hearing'],
                8: ['Memory', 'Emotion', 'Reward', 'Cognition', 'Vision', 'Manipulation', 'Hearing', 'Language'],
                9: ['Memory', 'Episodic Memory', 'Reward', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language'],
                10: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language'],
                11: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Arousal', 'Reaction Time', 'Vision', 'Manipulation', 'Perception', 'Language', 'Word'],
                12: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Anticipation', 'Reaction Time', 'Representation', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language'],
                13: ['Memory', 'Recognition', 'Retrieval', 'Emotion', 'Reward', 'Arousal', 'Anticipation', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language'],
                14: ['Memory', 'Episodic Memory', 'Retrieval', 'Emotion', 'Valence', 'Reward', 'Reaction Time', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Language', 'Word', 'Meaning'],
                15: ['Memory', 'Episodic Memory', 'Recall', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language', 'Word', 'Meaning'],
                16: ['Memory', 'Episodic Memory', 'Retrieval', 'Emotion', 'Valence', 'Reward', 'Decision Making', 'Arousal', 'Anticipation', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language', 'Word'],
                17: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Emotion', 'Fear', 'Reward', 'Decision Making', 'Arousal', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hand', 'Perception', 'Hearing', 'Meaning'],
                18: ['Memory', 'Episodic Memory', 'Recognition', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Cognition', 'Cognitive Process', 'Vision', 'Manipulation', 'Execution', 'Perception', 'Hearing', 'Word', 'Meaning'],
                19: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Emotion', 'Fear', 'Reward', 'Decision Making', 'Arousal', 'Reaction Time', 'Cognition', 'Vision', 'Manipulation', 'Execution', 'Hearing', 'Language', 'Word', 'Meaning', 'Speech'],
                20: ['Memory', 'Episodic Memory', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Fear', 'Reward', 'Arousal', 'Anticipation', 'Cognition', 'Cognitive Process', 'Vision', 'Manipulation', 'Execution', 'Perception', 'Hearing', 'Language', 'Word'],
                21: ['Memory', 'Episodic Memory', 'Recall', 'Retrieval', 'Emotion', 'Valence', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Cognition', 'Cognitive Process', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Perception', 'Hearing', 'Meaning'],
                22: ['Memory', 'Episodic Memory', 'Encoding', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Reaction Time', 'Cognition', 'Context', 'Vision', 'Manipulation', 'Execution', 'Hand', 'Hearing', 'Language', 'Word', 'Meaning'],
                23: ['Memory', 'Episodic Memory', 'Recognition', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Cognition', 'Thought', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Hand', 'Perception', 'Hearing', 'Language', 'Meaning'],
                24: ['Memory', 'Episodic Memory', 'Encoding', 'Recall', 'Retrieval', 'Emotion', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Anticipation', 'Social Cognition', 'Cognition', 'Thought', 'Representation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Perception', 'Language', 'Word', 'Meaning', 'Speech'],
                25: ['Memory', 'Episodic Memory', 'Encoding', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Cognition', 'Feedback', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Perception', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning', 'Speech'],
                26: ['Memory', 'Episodic Memory', 'Encoding', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Cognition', 'Cognitive Process', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Rest', 'Hearing', 'Language', 'Word', 'Meaning', 'Semantic Processing'],
                27: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Cognition', 'Cognitive Process', 'Attention', 'Context', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Perception', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning'],
                28: ['Memory', 'Episodic Memory', 'Encoding', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Valence', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Anticipation', 'Reaction Time', 'Cognition', 'Thought', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Perception', 'Hearing', 'Language', 'Meaning', 'Speech'],
                29: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Mood', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Anticipation', 'Cognition', 'Thought', 'Representation', 'Preparation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Hand', 'Hearing', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing'],
                30: ['Memory', 'Episodic Memory', 'Encoding', 'Recall', 'Retrieval', 'Emotion', 'Valence', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Cognition', 'Cognitive Process', 'Attention', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning', 'Semantic Processing', 'Speech'],
                31: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Cognition', 'Thought', 'Attention', 'Representation', 'Preparation', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Perception', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning', 'Semantic Processing'],
                32: ['Memory', 'Episodic Memory', 'Encoding', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Cognitive Process', 'Thought', 'Attention', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Perception', 'Hearing', 'Language', 'Word', 'Meaning', 'Semantic Memory', 'Speech'],
                33: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Fear', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Monitoring', 'Feedback', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Perception', 'Hearing', 'Language', 'Word', 'Meaning', 'Speech'],
                34: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Mood', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Cognition', 'Cognitive Process', 'Representation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Pain', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Speech'],
                35: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Mood', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Anticipation', 'Social Cognition', 'Cognition', 'Cognitive Process', 'Cognitive Control', 'Thought', 'Preparation', 'Feedback', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Perception', 'Pain', 'Hearing', 'Language', 'Language Processing', 'Meaning', 'Speech'],
                36: ['Memory', 'Episodic Memory', 'Encoding', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Mood', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Cognitive Control', 'Thought', 'Attention', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Perception', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning', 'Speech'],
                37: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Fear', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Perception', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning', 'Semantic Processing', 'Naming'],
                38: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Valence', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Cognition', 'Cognitive Process', 'Thought', 'Representation', 'Monitoring', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Rest', 'Perception', 'Heat', 'Pain', 'Hearing', 'Language', 'Word', 'Meaning', 'Semantic Processing', 'Speech'],
                39: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Mood', 'Valence', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Attention', 'Working Memory', 'Representation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Perception', 'Hearing', 'Language', 'Language Processing', 'Meaning', 'Speech', 'DSM-IV'],
                40: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Negative Emotion', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Cognition', 'Thought', 'Preparation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Face', 'Perception', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Speech'],
                41: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Fear', 'Loss', 'Reward', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Representation', 'Planning', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Hand', 'Face', 'Rest', 'Perception', 'Hearing', 'Tone', 'Language', 'Word', 'Meaning', 'Semantic Processing', 'Speech'],
                42: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Fear', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Working Memory', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Arm', 'Perception', 'Pain', 'Hearing', 'Listening', 'Language', 'Word', 'Meaning', 'Semantic Processing', 'Semantic Memory', 'Speech'],
                43: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Emotion', 'Mood', 'Valence', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Expectancy', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Working Memory', 'Representation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Pain', 'Hearing', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Semantic Memory', 'Naming', 'Speech', 'Reading'],
                44: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Expectancy', 'Social Cognition', 'Theory of Mind', 'Cognition', 'Cognitive Process', 'Representation', 'Preparation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Perception', 'Pain', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Speech'],
                45: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Negative Emotion', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Addiction', 'Arousal', 'Anticipation', 'Expectancy', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Cognitive Control', 'Thought', 'Representation', 'Strategy', 'Preparation', 'Feedback', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Perception', 'Hearing', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Speech'],
                46: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Memory Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Fear', 'Anger', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Anticipation', 'Expectancy', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Representation', 'Preparation', 'Feedback', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Hand', 'Perception', 'Hearing', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Speech', 'Reading'],
                47: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Fear', 'Loss', 'Reward', 'Reward Anticipation', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Expectancy', 'Social Cognition', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Cognitive Control', 'Thought', 'Representation', 'Feedback', 'Vision', 'Picture', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Arm', 'Perception', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Speech'],
                48: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Addiction', 'Arousal', 'Anticipation', 'Expectancy', 'Social Cognition', 'Theory of Mind', 'Cognition', 'Cognitive Process', 'Thought', 'Attention', 'Representation', 'Preparation', 'Feedback', 'Learning', 'Vision', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Hand', 'Perception', 'Pain', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Semantic Memory', 'Speech'],
                49: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Memory Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Negative Emotion', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Expectancy', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Attention', 'Working Memory', 'Representation', 'Feedback', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Skill', 'Hand', 'Perception', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Semantic Memory', 'Speech'],
                50: ['Memory', 'Episodic Memory', 'Encoding', 'Recognition', 'Recognition Memory', 'Familiarity', 'Recall', 'Retrieval', 'Memory Retrieval', 'Remembering', 'Emotion', 'Mood', 'Valence', 'Negative Emotion', 'Fear', 'Loss', 'Reward', 'Reward Processing', 'Decision Making', 'Arousal', 'Salience', 'Anticipation', 'Expectancy', 'Reaction Time', 'Cognition', 'Cognitive Process', 'Thought', 'Attention', 'Working Memory', 'Representation', 'Feedback', 'Vision', 'Eye', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Skill', 'Hand', 'Perception', 'Hearing', 'Listening', 'Language', 'Language Processing', 'Word', 'Meaning', 'Semantic Processing', 'Semantic Memory', 'Naming', 'Speech']
            }

var viewerHTML = "<div class='view' id='view_coronal' style='margin-left:15px'><canvas height='220' id='cor_canvas' width='220'></canvas><div class='slider nav-slider-vertical' id='nav-yaxis' style='float:left'></div></div><div class='view' id='view_sagittal'><canvas height='220' id='sag_canvas' width='264'></canvas><div class='slider nav-slider-horizontal' id='nav-xaxis'></div></div><div class='view' id='view_axial'><canvas height='220' id='axial_canvas' width='183'></canvas><div class='slider nav-slider-vertical' id='nav-zaxis' style='float:right'></div></div><div align='center' style='width:200px;float:left'><div id='layer_list_panel' align='center'><p style='margin-left:0px;'>Layers</p><div id='layer_visible_list' align='center'></div><ul id='layer_list' class='layer_settings' align='center'></ul></div><div id='viewer_panel'><div id='layer_list_panel'><div id='layer_visible_list'></div><ul id='layer_list' class='layer_settings'></ul></div><p style='margin-left:-15px;'>Opacity</p><div id='opacity_panel' align='left'><select id='select_color' class='layer_settings' style='display:none'></select><div class='slider layer_settings' id='opacity' align='center' style='width:195px'></div></div><p id='value_title' style='margin-left:-15px;'>Voxel Value</p><div id='value_panel' align='left'><a href='#' id='value_data_tooltip' data-tooltip='Select a domain number to see its mapping'><span id='value_data'></span></a></div></div></div>";

function pad(number) { return (number < 10 ? '0' : '') + number };

function loadDomains() {
    document.getElementById("intro_container").style.display = "none";
    document.getElementById("domain_container").innerHTML = viewerHTML;
    document.getElementById("chart").innerHTML = "";
    document.getElementById("hierarchy").innerHTML = "";

    var n_domains = document.getElementById("domain_slider_n").value;

    loadBrainMap(n_domains);
    
    if (n_domains > 0) {
        loadWordCloud(n_domains);
    }
};

function loadBrainMap(k) {

    k = parseInt(k);

    document.getElementById("intro_container").style.display = "none";
    document.getElementById("domain_container").innerHTML = viewerHTML;
    document.getElementById("chart").style.display = "inline-block";
    document.getElementById("hierarchy").innerHTML = "";

    viewer = new Viewer('#layer_list', '.layer_settings');
    viewer.addView('#view_axial', Viewer.AXIAL);
    viewer.addView('#view_coronal', Viewer.CORONAL);
    viewer.addView('#view_sagittal', Viewer.SAGITTAL);
    viewer.addSlider('opacity', '.slider#opacity', 'horizontal', 0, 1, 1, 0.05);
    viewer.addSlider("nav-xaxis", ".slider#nav-xaxis", "horizontal", 0, 1, 0.5, 0.01, Viewer.XAXIS);
    viewer.addSlider("nav-yaxis", ".slider#nav-yaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.YAXIS);
    viewer.addSlider("nav-zaxis", ".slider#nav-zaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.ZAXIS);
    viewer.clear()   // Paint canvas background while images load
    
    var images = [{
                'url': 'data/MNI152_T1_2mm_brain.nii.gz',
                'name': 'MNI152',
                'colorPalette': 'grayscale',
                'cache': false,
            }];

    for (var i = 1; i < (k + 1); i++) {
        images.push({
                'url': 'data/k' + pad(k) + '/circuit_k' + pad(k) + '_dom' + pad(i) + '.nii.gz',
                'name': names[k][i - 1],
                'colorPalette': nke_palette[i - 1],
                'opacity': 0.5,
                'cache': false,
                'val': 0.5
        })
    };
    viewer.loadImages(images);

};
