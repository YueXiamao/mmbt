export interface Question {
  id: number;
  text: string;
  dimension: 'activity' | 'social' | 'curiosity' | 'emotion' | 'territory' | 'adapt';
  options: {
    text: string;
    scores: {
      activity: number;
      social: number;
      curiosity: number;
      emotion: number;
      territory: number;
      adapt: number;
    };
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "周末早晨，你更想做什么？",
    dimension: 'activity',
    options: [
      { text: "早起跑步或去健身房", scores: { activity: 3, social: 1, curiosity: 2, emotion: 1, territory: 1, adapt: 2 } },
      { text: "睡到自然醒，然后慢慢吃个早餐", scores: { activity: 0, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 1 } },
      { text: "约朋友出来逛街或喝咖啡", scores: { activity: 2, social: 3, curiosity: 2, emotion: 3, territory: 1, adapt: 2 } },
      { text: "宅家里看书、看剧或者打游戏", scores: { activity: 0, social: 0, curiosity: 2, emotion: 1, territory: 2, adapt: 0 } },
    ],
  },
  {
    id: 2,
    text: "在陌生环境中，你的反应是？",
    dimension: 'curiosity',
    options: [
      { text: "兴奋地到处探索，每个角落都想看", scores: { activity: 2, social: 1, curiosity: 3, emotion: 1, territory: 0, adapt: 2 } },
      { text: "保持警觉，等别人先走再跟上", scores: { activity: 1, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
      { text: "无所谓，哪里都能适应", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 3 } },
      { text: "有点紧张，想赶紧熟悉环境", scores: { activity: 1, social: 1, curiosity: 1, emotion: 2, territory: 1, adapt: 1 } },
    ],
  },
  {
    id: 3,
    text: "和朋友聚会时，你通常是？",
    dimension: 'social',
    options: [
      { text: "话题的主导者，大家都在听我说", scores: { activity: 2, social: 3, curiosity: 2, emotion: 3, territory: 1, adapt: 2 } },
      { text: "在角落里和熟悉的人小声聊天", scores: { activity: 0, social: 1, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
      { text: "认真倾听，偶尔插话", scores: { activity: 1, social: 2, curiosity: 2, emotion: 2, territory: 1, adapt: 2 } },
      { text: "能不去就不去，太累了", scores: { activity: 0, social: 0, curiosity: 1, emotion: 0, territory: 2, adapt: 0 } },
    ],
  },
  {
    id: 4,
    text: "你的房间风格是？",
    dimension: 'territory',
    options: [
      { text: "极简风，只留必需品", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 0, adapt: 2 } },
      { text: "塞满了自己喜欢的东西，每件都有故事", scores: { activity: 1, social: 0, curiosity: 2, emotion: 2, territory: 3, adapt: 0 } },
      { text: "经常变化，定期重新布置", scores: { activity: 1, social: 1, curiosity: 3, emotion: 1, territory: 1, adapt: 2 } },
      { text: "乱中有序，只有我知道什么东西在哪", scores: { activity: 0, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
    ],
  },
  {
    id: 5,
    text: "遇到压力时，你会？",
    dimension: 'emotion',
    options: [
      { text: "找朋友倾诉，说出来就好多了", scores: { activity: 1, social: 3, curiosity: 1, emotion: 3, territory: 1, adapt: 1 } },
      { text: "自己消化，不想麻烦别人", scores: { activity: 0, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 2 } },
      { text: "通过运动或者吃东西发泄", scores: { activity: 2, social: 0, curiosity: 1, emotion: 2, territory: 1, adapt: 1 } },
      { text: "埋头睡觉，睡一觉就忘了", scores: { activity: 0, social: 0, curiosity: 0, emotion: 1, territory: 2, adapt: 1 } },
    ],
  },
  {
    id: 6,
    text: "你更喜欢什么样的音乐？",
    dimension: 'curiosity',
    options: [
      { text: "经典老歌，熟悉的旋律让我安心", scores: { activity: 0, social: 1, curiosity: 0, emotion: 2, territory: 2, adapt: 1 } },
      { text: "什么都听，探索新音乐很有趣", scores: { activity: 1, social: 1, curiosity: 3, emotion: 1, territory: 0, adapt: 2 } },
      { text: "节奏感强的，跟着嗨起来", scores: { activity: 3, social: 2, curiosity: 1, emotion: 2, territory: 0, adapt: 1 } },
      { text: "安静舒缓的，帮我放松", scores: { activity: 0, social: 0, curiosity: 1, emotion: 2, territory: 1, adapt: 1 } },
    ],
  },
  {
    id: 7,
    text: "旅行时，你更倾向？",
    dimension: 'adapt',
    options: [
      { text: "详细计划，攻略做到每一天", scores: { activity: 1, social: 1, curiosity: 2, emotion: 1, territory: 2, adapt: 0 } },
      { text: "随机应变，走到哪算哪", scores: { activity: 2, social: 1, curiosity: 3, emotion: 1, territory: 0, adapt: 3 } },
      { text: "找个喜欢的酒店待着，哪里都不想去", scores: { activity: 0, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
      { text: "跟团省心，有人安排好一切", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 2 } },
    ],
  },
  {
    id: 8,
    text: "别人对你的第一印象通常是？",
    dimension: 'social',
    options: [
      { text: "高冷，不好接近", scores: { activity: 0, social: 0, curiosity: 1, emotion: 0, territory: 2, adapt: 1 } },
      { text: "热情开朗，很容易聊起来", scores: { activity: 2, social: 3, curiosity: 1, emotion: 3, territory: 0, adapt: 1 } },
      { text: "安静，但很靠谱", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 2, adapt: 2 } },
      { text: "有趣，跟我聊天不会无聊", scores: { activity: 2, social: 2, curiosity: 3, emotion: 2, territory: 0, adapt: 1 } },
    ],
  },
  {
    id: 9,
    text: "你养宠物的态度是？",
    dimension: 'emotion',
    options: [
      { text: "超级有爱心，看到流浪猫狗就走不动", scores: { activity: 1, social: 2, curiosity: 2, emotion: 3, territory: 2, adapt: 1 } },
      { text: "喜欢但不会养，怕麻烦", scores: { activity: 0, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 1 } },
      { text: "养了就会负责到底，给它最好的", scores: { activity: 1, social: 1, curiosity: 1, emotion: 2, territory: 3, adapt: 1 } },
      { text: "我就是我自己的主子，不需要宠物", scores: { activity: 0, social: 0, curiosity: 1, emotion: 0, territory: 2, adapt: 1 } },
    ],
  },
  {
    id: 10,
    text: "工作中，你喜欢？",
    dimension: 'activity',
    options: [
      { text: "独立完成，不被打扰", scores: { activity: 1, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
      { text: "团队合作，大家一起头脑风暴", scores: { activity: 1, social: 3, curiosity: 2, emotion: 2, territory: 0, adapt: 1 } },
      { text: "有挑战性的任务，越难越兴奋", scores: { activity: 3, social: 1, curiosity: 3, emotion: 1, territory: 0, adapt: 2 } },
      { text: "稳定就好，不想承担太多责任", scores: { activity: 0, social: 1, curiosity: 0, emotion: 1, territory: 2, adapt: 1 } },
    ],
  },
  {
    id: 11,
    text: "你觉得自己是？",
    dimension: 'emotion',
    options: [
      { text: "非常感性，容易被感动", scores: { activity: 0, social: 2, curiosity: 1, emotion: 3, territory: 1, adapt: 1 } },
      { text: "理性优先，感情放第二位", scores: { activity: 1, social: 1, curiosity: 2, emotion: 0, territory: 1, adapt: 2 } },
      { text: "看情况，有时感性有时理性", scores: { activity: 1, social: 1, curiosity: 1, emotion: 2, territory: 1, adapt: 2 } },
      { text: "很少有情绪波动，很淡定", scores: { activity: 0, social: 0, curiosity: 1, emotion: 0, territory: 2, adapt: 2 } },
    ],
  },
  {
    id: 12,
    text: "你更喜欢什么样的天气？",
    dimension: 'curiosity',
    options: [
      { text: "阳光灿烂，想出去浪", scores: { activity: 3, social: 2, curiosity: 2, emotion: 2, territory: 0, adapt: 1 } },
      { text: "下雨天，宅在家里很舒服", scores: { activity: 0, social: 0, curiosity: 1, emotion: 2, territory: 2, adapt: 1 } },
      { text: "无所谓，什么天气都能接受", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 3 } },
      { text: "下雪天，浪漫又有氛围", scores: { activity: 1, social: 1, curiosity: 2, emotion: 2, territory: 1, adapt: 1 } },
    ],
  },
  {
    id: 13,
    text: "面对新朋友，你的态度是？",
    dimension: 'social',
    options: [
      { text: "主动搭话，很快就能熟络", scores: { activity: 2, social: 3, curiosity: 2, emotion: 2, territory: 0, adapt: 2 } },
      { text: "被动等待，对方先开口再说", scores: { activity: 0, social: 1, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
      { text: "选择性社交，只交志同道合的", scores: { activity: 1, social: 2, curiosity: 2, emotion: 1, territory: 2, adapt: 1 } },
      { text: "没必要，认识那么多人干嘛", scores: { activity: 0, social: 0, curiosity: 1, emotion: 0, territory: 3, adapt: 1 } },
    ],
  },
  {
    id: 14,
    text: "你的消费观念是？",
    dimension: 'territory',
    options: [
      { text: "喜欢就买，开心最重要", scores: { activity: 2, social: 2, curiosity: 2, emotion: 2, territory: 0, adapt: 1 } },
      { text: "精打细算，每分钱都要花的值", scores: { activity: 0, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 2 } },
      { text: "会存钱，但该花的时候不手软", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 2, adapt: 2 } },
      { text: "有多少花多少，月光族本族", scores: { activity: 1, social: 1, curiosity: 1, emotion: 2, territory: 0, adapt: 1 } },
    ],
  },
  {
    id: 15,
    text: "你在群体中的角色通常是？",
    dimension: 'social',
    options: [
      { text: "领袖型，大家都会听我的", scores: { activity: 2, social: 2, curiosity: 2, emotion: 2, territory: 2, adapt: 2 } },
      { text: "协调者，让大家都舒服", scores: { activity: 1, social: 3, curiosity: 1, emotion: 2, territory: 1, adapt: 2 } },
      { text: "执行者，完成分配给我的任务", scores: { activity: 2, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 2 } },
      { text: "旁观者，看着你们表演", scores: { activity: 0, social: 0, curiosity: 2, emotion: 1, territory: 2, adapt: 1 } },
    ],
  },
  {
    id: 16,
    text: "你更喜欢的生活方式是？",
    dimension: 'activity',
    options: [
      { text: "每天都有新鲜事，忙忙碌碌", scores: { activity: 3, social: 2, curiosity: 3, emotion: 1, territory: 0, adapt: 2 } },
      { text: "规律作息，稳定平淡", scores: { activity: 0, social: 1, curiosity: 0, emotion: 1, territory: 2, adapt: 2 } },
      { text: "偶尔热闹，偶尔安静，随心所欲", scores: { activity: 1, social: 2, curiosity: 2, emotion: 2, territory: 1, adapt: 2 } },
      { text: "能躺着绝不坐着，能省力就省力", scores: { activity: 0, social: 0, curiosity: 1, emotion: 1, territory: 2, adapt: 1 } },
    ],
  },
  {
    id: 17,
    text: "你擅长处理突发状况吗？",
    dimension: 'adapt',
    options: [
      { text: "非常擅长，临场应变能力很强", scores: { activity: 2, social: 1, curiosity: 2, emotion: 1, territory: 0, adapt: 3 } },
      { text: "看情况，小问题还行大事就慌", scores: { activity: 1, social: 1, curiosity: 1, emotion: 1, territory: 1, adapt: 1 } },
      { text: "不太擅长，希望一切都在计划内", scores: { activity: 0, social: 1, curiosity: 1, emotion: 1, territory: 2, adapt: 0 } },
      { text: "完全不行，一变就整个人宕机", scores: { activity: 0, social: 0, curiosity: 0, emotion: 1, territory: 2, adapt: 0 } },
    ],
  },
  {
    id: 18,
    text: "最后，你觉得自己更像？",
    dimension: 'territory',
    options: [
      { text: "自由奔放的野猫，独来独往", scores: { activity: 2, social: 0, curiosity: 3, emotion: 1, territory: 0, adapt: 2 } },
      { text: "黏人的家猫，需要陪伴", scores: { activity: 0, social: 3, curiosity: 1, emotion: 3, territory: 2, adapt: 1 } },
      { text: "骄傲的狮子猫，优雅而独立", scores: { activity: 1, social: 1, curiosity: 2, emotion: 1, territory: 2, adapt: 2 } },
      { text: "慵懒的肥猫，吃饱喝足就是幸福", scores: { activity: 0, social: 1, curiosity: 0, emotion: 2, territory: 2, adapt: 1 } },
    ],
  },
];
