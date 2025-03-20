$(document).ready(function() {
    console.clear();

    // Helper functions for random values
    const random = (min, max) => (direction = 1) => (min + (max - min) * Math.random()) * direction;

    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomDelay = random(0, 50);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray(".blur");
    blurs.forEach((blur) => {
        gsap.set(blur, {
            x: randomX(),
            y: randomY(),
            rotation: randomAngle()
        });

        moveX(blur, 1);
        moveY(blur, -1);
        rotate(blur, 1);
    });

    function rotate(target, direction) {
        gsap.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            ease: "sine.inOut",
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {
        gsap.to(target, randomTime(), {
            x: randomX(direction),
            ease: "sine.inOut",
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {
        gsap.to(target, randomTime(), {
            y: randomY(direction),
            ease: "sine.inOut",
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    } 
    
});  


$(document).ready(function(){
    // 호버 이벤트 대신 클릭 이벤트
    $(".imgbox").click(function(){
        const imageName = $(this).data("image");
        
        // 모든 팝업 숨기기
        $(".popup").hide();
        
        // 해당하는 팝업만 보이게
        $("#popup" + imageName.charAt(0).toUpperCase() + imageName.slice(1))
            .stop(true, true)
            .fadeIn(200);
        
        // 팝업 오버레이 보이기
        $("#popupOverlay")
            .stop(true, true)
            .fadeIn(200);
    });
  
    // 오버레이 클릭 시 팝업 닫기
    $("#popupOverlay").click(function(){
        $(".popup, #popupOverlay")
            .stop(true, true)
            .fadeOut(200);
    });
});

  
  
  
  
  
  
  
  
  