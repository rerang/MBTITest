let questionNumber=1;
const questionGroup = {
    1 : { "title" : "Q1. 사람들이 자꾸 쳐다보는데? 왜지감자...?", "type" : "EI", "choiceA" : "<big><b>잘생긴건 알아가지고~후후</big></b>", "choiceB" : "뭐지,, <big><b>얼굴에 뭐 묻었나?</big></b>" },
    2 : { "title" : "Q2. 친구랑 저녁 약속을 하려하는데, 뭐라고 할까?", "type" : "JP", "choiceA" : "<big><b>금요일 18시에 고기고기하우스</big></b>에서 보자!", "choiceB" : "금요일 저녁에 봐~ <big><b>그때 먹고 싶은걸로 먹자!</big></b>" },
    3 : { "title" : "Q3. 바퀴벌레가 나왔다. 이럴 때 나는...", "type" : "EI", "choiceA" : "너는 왼쪽, 나는 오른쪽에서 <big><b>같이 덮치자!</big></b>", "choiceB" : "(파리채를 들고온다) 무섭지만 <big><b>내가 혼자 잡을게!</big></b>" },
    4 : { "title" : "Q4. 절절한 연애를 시작했다. 나의 그 사람은...", "type" : "SN", "choiceA" : "배경, 외모, 내면 다 <big><b>이상형과 잘 맞는 사람!</b></big>", "choiceB" : "모든 곤경을 <big><b>같이 이겨낼 수 있을</b></big> 것 같은 사람!" },
    5 : { "title" : "Q5. 매력적인 새로운 것을 배우게 되었는데... ", "type" : "SN", "choiceA" : "널리 이롭게 쓰일 것 같고, <big><b>실리</b></big>가 있어!", "choiceB" : "<big><b>취지가 의미</b></big>있고, 내용이 흥미로워!" },
    6 : { "title" : "Q6. 친구의 표정이 좋지 않은데...", "type" : "TF", "choiceA" : "평소와 다른 어떤 일이 있었던 것이군. 한 번 <big><b>물어봐야겠어!</b></big>", "choiceB" : "친구의 표정이 우울해보여,, <big><b>위로해줘야겠어!</b></big>" },
    7 : { "title" : "Q7. 어느 밤, 갑자기 나 지금 센치해~ 왜지감자...?", "type" : "SN", "choiceA" : "옛날이 생각이 나는군. <big><b>추억이 새록새록 떠올라</big></b>.", "choiceB" : "달이 밝네.. 달빛이 <big><b>나를 위로해주는것 같아...</big></b>" },
    8 : { "title" : "Q8. 친구가 실연의 아픔으로 삭발을 했다고 한다.", "type" : "TF", "choiceA" : "머리카락 다 미는거 <big><b>편하려나?</big></b>", "choiceB" : "이별로 많이 <big><b>힘들구나</big></b>" },
    9 : { "title" : "Q9. 지인이 지갑을 잃어버렸다. 이때 나는...", "type" : "TF", "choiceA" : "<big><b>카드</b></big> 있으면 <big><b>일단 정지</b></big>시키고, 마지막으로 본 곳부터 가보자.", "choiceB" : "괜찮아? <big><b>금방 찾을 수 있을거야.</b></big> 나도 같이 찾아볼게." },
    10 : { "title" : "Q10. 여행 가기전 나는...?", "type" : "JP", "choiceA" : "교통편, 숙소, 짐, 동선까지!!! <big><b>모든게 완벽해야해!</b></big>", "choiceB" : "잘 곳, 왕복 교통편만! 나머지는 <big><b>그때 보고~</b></big> 끝!" },
    11 : { "title" : "Q11. 스트레스를 받으면 나는...", "type" : "EI", "choiceA" : "<big><b>친구와 대화</big></b>하며 스트레스 빠세!!", "choiceB" : "<big><b>쉬는게 제일!</big></b> 굴러다니면서 힐링!" },
    12 : { "title" : "Q12. 마라톤을 하는데, 얼마남지 않은 결승선!! 그런데 너무 힘들다ㅠ", "type" : "JP", "choiceA" : "마침표를 찍어야만 해! <big><b>천천히라도 끝까지</b></big> 하자!", "choiceB" : "<big><b>참가에 의의</b></big>를 두고, 다음에 또 참여하자!" }
}

const resultGroup = {
    "ISTJ" : { "name" : "까칠냥", "explain" : "가까이 오지 마! 코로나 시국에 적합한 인재 냥냥!!", "img" : "images/ISTJ.png", "explainMore":"현실적이고 철저해요. 까칠냥을 만지기 위해서는 먼저 대가가 필요하답니다!<br> - 자신만의 룰이 중요해요.<br> - 혼자의 시간이 많고, 독립적으로 행동해요.<br> - 낯을 많이 가려요.<br> - 많이 솔직해요." },
    "ISFJ" : { "name" : "울지마라냥", "explain" : "눈치 max!! 집사~ 너 슬프냥? 특별히 만지게 해주지~!", "img" : "images/ISFJ.png", "explainMore":"집사를 책임지고 있다는 생각을 하고 있어요! 정이 많고, 헌신적인 착한 냥냥이랍니다!<br> - 관심받기를 좋아하지만, 나서는 것은 좋아하지 않아요.<br> - 착하고 친절해요.<br> - 이야기를 잘 들어줘요."  },
    "ISTP" : { "name" : "잘꾸다냥", "explain" : "귀찮아.. 난 잘거다냥~ 소심하긴하지만, 귀찮은거엔 주장이 확실해!", "img" : "images/ISTP.png", "explainMore":"조용히 집사를 높은 곳에서 관찰해요.  매번 자는 모습만 보이는 이유는 집사 외에는 관심이 없어서 그렇다네요~<br> - 혼자 있는 것을 좋아해요.<br> - 무뚝뚝하고 매사 진지해요.<br> - 팩트를 좋아하고, 남에게 관심이 없어요."  },
    "ISFP" : { "name" : "날보라냥", "explain" : "멈춰!! 집사는 나만을 봐야한다냥~! ", "img" : "images/ISFP.png", "explainMore":"집사를 괴롭히는 것처럼 보이지만,  사랑을 표현하는 거에요.  행동이 앞서서 곤혹스러울 때도 있지만,  따뜻한 마음을 가졌답니다~<br> - 마음에 없는 이야기를 하지 않아요.<br> - 타인에게 무관심해요.<br> - 관심분야에만 관심이 있어요."  },
    "ENFP" : { "name" : "덜렁특이냥", "explain" : "비싼 집 사줬더니.. 왜 상자에 들어가는거야ㅠㅠ~", "img" : "images/ENFP.png", "explainMore":"상상력이 풍부하고, 호기심이 많아요.  관심이 생긴 것은 일단 앞발로 툭툭 쳐본답니다!<br> - 사람들에게 관심이 많아요.<br> - 변덕이 심해요.<br> - 충동적인 의사결정이 많아요." },
    "ENTP" : { "name" : "쿨냥", "explain" : "새로사면 될 것이 아니냥!! 집사 아주 쿨하지 못해~", "img" : "images/ENTP.png", "explainMore":"창의력이 풍부하고 새로운 시도를 즐겨요.  완벽하다고 생각해서, 집사에게  가르침을 주고싶어 한답니다!<br> - 팩폭을 많이해요.<br> - 새로운 것을 좋아하지만, 끈기가 부족해요.<br> - 계획은 많지만 실천이 많지는 않아요."  },
    "ENFJ" : { "name" : "개냥", "explain" : "애교뿜뿜 멍뭉미냥! 주인님만 바라보는중~", "img" : "images/ENFJ.png", "explainMore":"친절하고 재치있어요. 집사를 좋아해서, 충성심도 크고, 애교도 많아요. '댕댕이인가?'하는 생각도 든답니다!<br> - 단순하고 강철멘탈이에요.<br> - 센스가 좋고 눈치가 빨라요.<br> - 사람을 잘 믿어요."  },
    "ENTJ" : { "name" : "간식 탐지냥", "explain" : "간식... 자다가도 간식 소리에 반응하는 탐지냥!", "img" : "images/ENTJ.png", "explainMore":"활동적이고, 논리적이에요.  간식캔 소리가 나면, 바로 달려온답니다!  가끔 리더쉽을 발휘해서 친구들을 다 부르기도 해요ㅠㅠ<br> - 리더십이 좋아요.<br> - 호기심이 많아요.<br> - 도전적이고 독립성이 커요."  },
    "ESTP" : { "name" : "나이트 러너냥", "explain" : "밤이되면, 이제 움직일 때! 집사의 뱃살은 내가 책임진다냥!!", "img" : "images/ESTP.png", "explainMore":"관용적이고, 재치있어요.  행동파라서, 밤마다 임무를 수행해요.  집사를 밟아주면 시원해할 것이라고 생각하기도 한답니다!<br> - 반항아적 기질이 있어요.<br> - 규칙에 얽매이는 것보다 자유로워요.<br> - 도전을 많이하고, 관심을 좋아해요."  },
    "ESFP" : { "name" : "인플루언서냥", "explain" : "엘레강스한 내 털을 봐라냥~ 집사들의 관심을 즐기는 냥냥!!", "img" : "images/ESFP.png", "explainMore":"사교적이고 매력적인 고양이에요. 실생활을 즐기는 타입이죠.  자신의 털이 얼마나 예쁜지 자랑하곤 한답니다!<br> - 침묵을 싫어해요.<br> - 은근 멘탈이 약해요.<br> - 정이많고 사교성이 좋아요."  },
    "ESTJ" : { "name" : "라떼는 마리냥", "explain" : "얘, 봄벌레가 맛있단다~ 넌 이런거 안먹어봤지? 라떼는 마리냥~", "img" : "images/ESTJ.png", "explainMore":"현실적이고, 체계적인 리더의 성향을 가졌어요.  사냥을 못하는 집사들을 위해 사냥을 대신 해주며,  잔소리를 한답니다~<br> - 호불호가 확실해요.<br> - 자기주장이 강해요.<br> - 리더자리를 좋아하지 않지만, 하면 잘해요."  },
    "ESFJ" : { "name" : "츄르애교냥", "explain" : "츄릅~ 간식에만 애교 뿜뿜!!", "img" : "images/ESFJ.png", "explainMore":"현실을 바탕으로 타인에게 봉사하는 경향이 있어요.  간식을 위해 집사에게 봉사하는 것이랍니다~<br> - 사회생활을 잘해요.<br> - 분위기 메이커 성향이 있어요.<br> - 감정기복이 심하고 얼굴에 감정이 다 드러나요."  },
    "INFJ" : { "name" : "프로고민냥", "explain" : "집사는 챙겨줘야하는 존재! 고민도 많은데, 집사도 지켜야한다니..", "img" : "images/INFJ.png", "explainMore":"걱정이 많고, 의견을 잘 드러내어 리드해요.  집사에게 말을 거는 것은 집사를 설득하려는 것이랍니다!<br> - 생각이 많아요.<br> - 눈치가 빠르고 계획적이에요.<br> - 내 사람에게 다 베풀어요."  },
    "INTJ" : { "name" : "고독하구냥", "explain" : "집사에게 관심 받으려 장난은 많이 치지만, 혼자 고독을 즐기는 냥냥!", "img" : "images/INTJ.png", "explainMore":"혼자가 일상인, 독립적인 고양이에요.  영감을 실현시키려는 의지를 가져서,  호기심이 생기면 일단 도전해본답니다~<br> - 고집이 세고, 공감 능력이 낮아요.<br> - 효율성에 미쳐있어요.<br> - 남에게 무신경해요."  },
    "INFP" : { "name" : "사차원냥", "explain" : "나도 날 수 있을까? 항상 생각이 많은, 특히나 이상한 생각이 많은 냥냥!", "img" : "images/INFP.png", "explainMore":"마음이 따뜻하고, 이상적이에요.  해보고 싶은 것은 도전해본답니다~  가끔 현실적이지 않은 생각을 실행하려 해서, 집사를 놀라게 해요!<br> - 고집이 생기면 절대 꺾지 않아요.<br> - 본인 중심적이에요.<br> - 선택적으로 공감해요."  },
    "INTP" : { "name" : "명탐정냥", "explain" : "약간씩 움직이는 다리, 적당한 속도감.. 범인은 너다냥!!!", "img" : "images/INTP.png", "explainMore":"조용하고, 분석적이에요.  가구 틈으로 들어가, 기회를 엳보며,  범인을 색출한답니다~<br> - 자발적 아웃사이더이며, 나르시즘을 가지고 있어요.<br> - 매우 진지해요.<br> - 인간관계에 계산적이고 타인의 시선에 구애받지 않아요."  }
}

let startQuestion = ()=>{
    $(".testStart").hide();
    $(".questionArea").show();
    turnToNextPage(questionNumber);
}
$("#choiceA").click(()=>{
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue)+1);
    turnToNextPage();
});
$('#choiceB').click(()=>{
    turnToNextPage();
});

let turnToNextPage = ()=>{
    if(questionNumber==Object.keys(questionGroup).length+1){
        makeResult();
    }
    else{
        paintNextQuestion();
        questionNumber++;
    }
}

let paintNextQuestion = ()=>{
    $("#progress_num").html(questionNumber+'/12');
    $(".progress_bar").attr('style', 'width: ' + ((questionNumber-1)/12)*100 + '%');
    $("#question").html(questionGroup[questionNumber]["title"]);
    $("#type").val(questionGroup[questionNumber]["type"]);
    $("#choiceA").html(questionGroup[questionNumber]["choiceA"]);
    $("#choiceB").html(questionGroup[questionNumber]["choiceB"]);
}

let makeResult = ()=>{
    $(".questionArea").hide();

    var mbti = "";
    ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
    ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
    ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
    ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";

    paintResult(mbti);
}

let paintResult = (mbti)=>{
    $("#pic").attr('src', resultGroup[mbti]["img"]);
    $("#name").html("<mark style=\"background-color: rgba(255, 203, 203, 0.8);\"><b>"+resultGroup[mbti]["name"]+"</b></mark>");
    $("#explain").html(resultGroup[mbti]["explain"]);
    $("#explainMore").html(resultGroup[mbti]["explainMore"]);
    $("#preImage").attr('content', "https://whatifibecamecat.netlify.app/"+resultGroup[mbti]["img"]);
    $(".result").show();
}