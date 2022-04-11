
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5.version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8360p5u9u/model.json',modelloaded);

function modelloaded(){
    console.log("model loaded");

}

        
        function check(){
            img=document.getElementById('captured_image');
            classifier.classify(img,gotResult);
        }

        function gotResult(error,results)
        {
            if(error)
            {
                console.error(error);
            }
            else{
                console.log(results);
                document.getElementById("result_emotion_name").innerHTML=results[0].label;
                
                prediction_1=results[0].label;
                
                speak();
                if(results[0].label=="thumbsup")
                {
                    document.getElementById("update_emoji").innerHTML="&#128077;";
        
                }
                if(results[0].label=="thumbsdown")
                {
                    document.getElementById("update_emoji").innerHTML="&#128078;";
                    
                }
                if(results[0].label=="point")
                {
                    document.getElementById("update_emoji").innerHTML="&#128070;";
                    
                }
                if(results[0].label=="wavehi")
                {
                    document.getElementById("update_emoji2").innerHTML="&#128522";
                    
                }
               
                    
                }
            }
        

   