export interface ScoreType {
  activity: number;
  social: number;
  curiosity: number;
  emotion: number;
  territory: number;
  adapt: number;
}

export interface CatType {
  id: string;
  name: string;
  tags: string[];
  description: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  lifestyle: string[];
  relationships: string[];
  imageUrl: string;
  compatibleWith: string[];
  compatibleReason: string;
}

export const catTypes: CatType[] = [
  {
    id: 'M1',
    name: '狮子猫',
    tags: ['高冷', '独立', '优雅', '神秘'],
    description: '你是猫中的贵族——狮子猫。你拥有与生俱来的优雅气质，举止间尽显高贵。你不喜欢被束缚，享受独处的时光，但偶尔也会展现出温柔的一面。你的高冷不是冷漠，而是一种自我保护的智慧。你是天生的领袖，有着强烈的领地意识和自尊。',
    personality: [
      '独立自主，不需要太多陪伴也能自得其乐',
      '对环境有强烈的掌控感，喜欢一切都井然有序',
      '优雅从容，无论发生什么都能保持体面',
      '慢热型，对不熟悉的人保持距离，但一旦认定就很忠诚',
    ],
    strengths: ['领导力强', '独立思考', '情绪稳定', '品味出众', '战略眼光'],
    weaknesses: ['边界感过强', '不易表达情感', '容易孤独', '控制欲'],
    lifestyle: ['享受独处时光', '爱好整洁有序', '追求品质生活', '定期巡视领地'],
    relationships: ['择友挑剔但忠诚', '喜欢势均力敌的关系', '不擅长主动示好'],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80',
    compatibleWith: ['M4', 'M8'],
    compatibleReason: 'M4英短的慵懒随和能软化你的高冷，M8波斯猫的优雅高贵与你不谋而合。你们的相处模式是：彼此独立又相互欣赏，不需要刻意讨好，却在无声中达成默契。',
  },
  {
    id: 'M2',
    name: '布偶猫',
    tags: ['温柔', '黏人', '忠诚', '暖心'],
    description: '你是猫中天使——布偶猫。你温柔得像一团棉花糖，总是给人温暖和治愈。你渴望陪伴，也乐于给予爱。你是那种会在朋友难过时默默陪伴在身边的人，忠诚而可靠。你对世界充满善意，也希望被世界温柔以待。',
    personality: [
      '极度温柔，几乎从不发脾气',
      '黏人但不失分寸，需要情感连接',
      '忠诚度极高，认定主人就不离不弃',
      '治愈系存在，和你在一起让人感到安心',
    ],
    strengths: ['共情能力强', '包容度高', '善于倾听', '情绪稳定', '无条件的爱'],
    weaknesses: ['过度依赖', '不善拒绝', '容易受伤', '需要持续的正反馈'],
    lifestyle: ['喜欢依偎在一起', '享受安静的陪伴', '需要被需要的感觉', '喜欢表达爱意'],
    relationships: ['全心付出型', '需要伴侣的表达', '不设防的信任', '讨厌争吵'],
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&q=80',
    compatibleWith: ['M7', 'M10'],
    compatibleReason: 'M7暹罗猫和你一样渴望陪伴，能给你持续的互动；M10橘猫的乐观随和让你感到放松，不需要担心冷场。你们在一起时，空气中都弥漫着温暖的气息。',
  },
  {
    id: 'M3',
    name: '狸花猫',
    tags: ['活泼', '好奇', '机智', '敏捷'],
    description: '你是中华田园猫的骄傲——狸花猫。你活泼好动，好奇心爆棚，脑子转得比谁都快。你是家里的气氛担当，总能发现有趣的事情。但别看你调皮，关键时刻你可是最靠谱的。你的生存智慧是所有猫咪中最接地气的。',
    personality: [
      '精力充沛，每天都有用不完的能量',
      '聪明机智，学习能力超强',
      '好奇心旺盛，什么都想碰一碰',
      '捕猎本能强，反应迅速',
    ],
    strengths: ['适应力强', '机智过人', '身体素质好', '独立生存能力', '情商高'],
    weaknesses: ['过于好奇容易惹祸', '有时过于活跃', '不太安分', '主意多'],
    lifestyle: ['每天都在探险', '对一切充满兴趣', '喜欢户外活动', '闲不住'],
    relationships: ['朋友多但知己少', '喜欢有趣的灵魂', '讨厌无聊', '重情义但表达直接'],
    imageUrl: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&q=80',
    compatibleWith: ['M5', 'M14'],
    compatibleReason: 'M5美短的活力和你不相上下，一起疯玩简直是双倍快乐；M14孟加拉猫的野性与你的田园气质契合，你们都是户外派，能一起探索更大的世界。',
  },
  {
    id: 'M4',
    name: '英短',
    tags: ['慵懒', '淡定', '治愈', '稳重'],
    description: '你是猫中绅士——英短。你最大的特点就是：稳。无论外界如何喧嚣，你都能保持一副淡定自若的样子。你喜欢舒适的环境，是典型的享乐主义者。你的存在本身就是一种治愈。你是天生的哲学家，深谙"少即是多"的生活哲学。',
    personality: [
      '情绪稳定，很少有大起大落',
      '慵懒享受，把生活过成诗',
      '不爱计较，对很多事情都看得很开',
      '慢悠悠的节奏感，生活在你眼里不需要那么急',
    ],
    strengths: ['情绪稳定', '包容心强', '生活质量高', '理财能力强', '慢性子但靠谱'],
    weaknesses: ['过于懒散', '缺乏紧迫感', '容易满足现状', '运动不足'],
    lifestyle: ['每天睡眠10小时以上', '喜欢舒适的位置', '对食物挑剔', '偶尔散步'],
    relationships: ['温和不做作', '不争不抢', '陪伴型', '很少主动冲突'],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80',
    compatibleWith: ['M1', 'M8'],
    compatibleReason: 'M1狮子猫的高冷与你的淡然能互相欣赏；M8波斯猫的贵族气质和你一样，都喜欢优雅从容的生活方式。你们在一起，是"岁月静好"的最佳注解。',
  },
  {
    id: 'M5',
    name: '美短',
    tags: ['调皮', '精力充沛', '勇敢', '好奇'],
    description: '你是猫中永动机——美短。你似乎永远都有消耗不完的精力，对一切充满好奇。你胆子大，什么都敢尝试，是探险家的性格。你给家里带来无尽的欢乐和活力。你是美国乡村文化的代表：自由、勇敢、充满活力。',
    personality: [
      '天生的冒险家，精力无限',
      '胆子大，不怕尝试新事物',
      '调皮捣蛋，但懂得分寸',
      '运动天赋强，喜欢攀爬和跳跃',
    ],
    strengths: ['勇敢果断', '身体灵活', '好奇心强', '适应能力好', '社交能力强'],
    weaknesses: ['过于活跃', '容易闯祸', '注意力不集中', '需要大量关注'],
    lifestyle: ['每天需要大量运动', '喜欢攀爬高点', '对玩具着迷', '需要空间释放精力'],
    relationships: ['自来熟', '喜欢交朋友', '需要伴侣陪玩', '讨厌被忽视'],
    imageUrl: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=800&q=80',
    compatibleWith: ['M3', 'M14'],
    compatibleReason: 'M3狸花猫和你是"田园双雄"，精力值和好奇心都匹配；M14孟加拉猫的运动量和野性与你不相上下，你们可以一起在家开"猫咪运动会"。',
  },
  {
    id: 'M6',
    name: '缅因猫',
    tags: ['霸气', '领袖', '稳重', '威严'],
    description: '你是猫中领袖——缅因猫。你气场强大，天生就有一种让人信服的力量。你稳重、霸气，是家庭的保护者。你对在乎的人会展现出温柔的一面，是真正的大家长型猫咪。你是猫咪界的"老大哥"，一举一动都透着责任感和担当。',
    personality: [
      '天生领袖气质，自带威严',
      '保护欲强，愿意为家人遮风挡雨',
      '稳重成熟，遇事不慌',
      '对陌生人保持警惕，但不会无故攻击',
    ],
    strengths: ['领导力强', '责任担当', '抗压能力', '保护意识', '成熟稳重'],
    weaknesses: ['过于严肃', '不善表达情感', '领地意识过强', '有时过于保护'],
    lifestyle: ['巡视领地是日常', '喜欢高处观察', '作息规律', '对家人有强烈的保护欲'],
    relationships: ['可靠的依靠', '不善言辞但行动派', '择友严格', '一旦认定的朋友会全力保护'],
    imageUrl: 'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=800&q=80',
    compatibleWith: ['M4', 'M9'],
    compatibleReason: 'M4英短的淡定从容能平衡你的严肃；M9三花猫的神秘多变能给你带来新鲜感，同时不威胁你的领袖地位。你们在一起，是"霸道总裁配小娇妻"的猫版。',
  },
  {
    id: 'M7',
    name: '暹罗猫',
    tags: ['话痨', '聪明', '依赖', '深情'],
    description: '你是猫中话痨——暹罗猫。你不仅长得精致，还是个话匣子！你喜欢"说话"，会用各种声调表达自己的需求和情绪。你聪明绝顶，对主人极度依赖，是情感需求很高的猫咪。你是猫咪界的"社交达人"，需要大量的关注和互动来满足你的情感需求。',
    personality: [
      '话多爱叫，喜欢用声音交流',
      '极度黏人，恨不得和主人连体',
      '智商高，学习能力强',
      '情感细腻，需要大量的关注和互动',
    ],
    strengths: ['情商高', '表达能力强', '聪明伶俐', '学习能力强', '对主人忠诚'],
    weaknesses: ['情感依赖', '容易吃醋', '分离焦虑', '话太多可能扰邻'],
    lifestyle: ['需要每天互动', '喜欢"对话"', '讨厌被单独留在家', '需要智力玩具'],
    relationships: ['深情且专一', '需要伴侣回应', '表达直接', '讨厌被冷落'],
    imageUrl: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=800&q=80',
    compatibleWith: ['M2', 'M12'],
    compatibleReason: 'M2布偶猫和你一样渴望陪伴，你们可以互相"聊天"一整天；M12无毛猫的情感细腻与你契合，你们能深度理解彼此的情感需求，是"灵魂伴侣"型组合。',
  },
  {
    id: 'M8',
    name: '波斯猫',
    tags: ['优雅', '安静', '高贵', '傲娇'],
    description: '你是猫中贵族——波斯猫。优雅是你的代名词，你的一举一动都散发着高贵的气质。你安静、不爱动，但对生活质量有极高的要求。你是那种"只可远观不可亵玩"的存在。你深谙"稀缺即珍贵"的人生哲学，从不轻易放下身段。',
    personality: [
      '极致优雅，动作轻柔缓慢',
      '安静独处，不需要太多互动',
      '对环境挑剔，追求品质生活',
      '傲娇属性，不会轻易讨好',
    ],
    strengths: ['气质出众', '情绪稳定', '品味高雅', '安静不闹', '有品位'],
    weaknesses: ['掉毛量大', '需要日常美容', '高冷难以接近', '对环境要求高'],
    lifestyle: ['每天梳毛是仪式', '喜欢安静的环境', '对舒适度挑剔', '睡眠时间长'],
    relationships: ['高冷但一旦认了就深情', '不喜欢主动', '需要对方先表达', '欣赏有品位的人'],
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80',
    compatibleWith: ['M1', 'M4'],
    compatibleReason: 'M1狮子猫的优雅与你旗鼓相当，是"高手过招"的组合；M4英短的淡定从容与你的高冷相得益彰，你们都是"安静的美男子/美女"，相处起来毫不费力。',
  },
  {
    id: 'M9',
    name: '三花猫',
    tags: ['多变', '神秘', '直觉', '独特'],
    description: '你是猫中谜——三花猫。你性格复杂而迷人，难以被定义。你有时候黏人，有时候又很独立；有时候活泼，有时候又安静。你的情绪像彩虹一样多变，让人永远猜不透。你是猫界的"艺术家"，性格就是最独特的作品。',
    personality: [
      '性格多面，难以捉摸',
      '直觉敏锐，能感知到微妙的变化',
      '独立又黏人，看心情',
      '独特而不随大流，有自己的小世界',
    ],
    strengths: ['直觉敏锐', '创造力强', '适应力好', '情商高', '难以预测的魅力'],
    weaknesses: ['情绪波动大', '难以捉摸', '有时过于敏感', '不喜欢被约束'],
    lifestyle: ['跟随心情行动', '喜欢突然的惊喜', '有自己的小怪癖', '讨厌被定义'],
    relationships: ['喜欢有深度的交流', '讨厌表面的寒暄', '需要空间也享受亲密', '容易被特别的灵魂吸引'],
    imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80',
    compatibleWith: ['M6', 'M16'],
    compatibleReason: 'M6缅因猫的霸气能给你安全感；M16俄罗斯蓝猫的神秘与你的气质契合，你们都是"高深莫测"型，在一起充满了互相探索的乐趣。',
  },
  {
    id: 'M10',
    name: '橘猫',
    tags: ['吃货', '友善', '随和', '乐观'],
    description: '你是猫中乐天派——橘猫。你对生活的态度就是：开心就好！你是天生的吃货，对食物有着执着的热爱。你友善随和，和谁都能相处得来。你的存在就是告诉大家：生活其实很简单，幸福也很简单。你们是"躺平文化"的最佳代言人。',
    personality: [
      '超级吃货，对食物毫无抵抗力',
      '性格随和，和任何人都能成为朋友',
      '乐观开朗，很少焦虑',
      '懒散舒适，能躺着绝不站着',
    ],
    strengths: ['人缘好', '不计较', '容易满足', '心态好', '适应能力强'],
    weaknesses: ['贪吃易胖', '缺乏上进心', '过于懒散', '有时没心没肺'],
    lifestyle: ['吃睡吃睡循环', '对食物以外的事情都不太积极', '喜欢晒太阳', '能不动就不动'],
    relationships: ['老好人', '谁都能和橘猫做朋友', '不记仇', '容易原谅别人'],
    imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80',
    compatibleWith: ['M2', 'M5'],
    compatibleReason: 'M2布偶猫的温柔和你的友善完美契合；M5美短的活力能带动你偶尔动一动，而不会强迫你。你们在一起时，氛围轻松愉快，是朋友圈里的"开心果"组合。',
  },
  {
    id: 'M11',
    name: '奶牛猫',
    tags: ['搞笑', '神经质', '活跃', '戏精'],
    description: '你是猫中哈士奇——奶牛猫。你的脑回路清奇得让人怀疑你是不是真的猫。你经常做出一些匪夷所思的事情，是家里的搞笑担当。你用生命在诠释什么叫"猫格分裂"。你是猫咪界的"谐星"，负责每天给家人带来欢乐和惊吓。',
    personality: [
      '脑回路清奇，经常做出搞笑举动',
      '精力旺盛但用途不明',
      '戏精上身，表情管理失败',
      '时而正常时而发疯，不可预测',
    ],
    strengths: ['搞笑天赋', '活跃气氛', '不怕生', '勇敢尝试', '不按常理出牌'],
    weaknesses: ['过于神经质', '难以预测', '可能拆家', '注意力分散'],
    lifestyle: ['突然冲刺是日常', '喜欢突然攻击', '可能会突然发呆', '每天都在表演'],
    relationships: ['是朋友圈的气氛担当', '喜欢被关注', '恶作剧是表达方式', '讨厌被忽视但也不消停'],
    imageUrl: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&q=80',
    compatibleWith: ['M5', 'M14'],
    compatibleReason: 'M5美短和M14孟加拉猫的精力与你的神经质匹配，他们能跟上你的节奏，不会嫌弃你"太闹"。你们三个在一起，能组一个"猫咪马戏团"。',
  },
  {
    id: 'M12',
    name: '无毛猫',
    tags: ['独特', '深情', '敏感', '体贴'],
    description: '你是猫中异星——无毛猫。你外表独特，内心却比任何猫都渴望爱。你对温度和情感都极其敏感，是真正的"暖心"型猫咪。你不喜欢孤独，需要主人大量的陪伴和抚摸。你的外表冷酷，内心却燃烧着对世界的热爱。',
    personality: [
      '外表独特，回头率百分百',
      '对主人极度依赖和深情',
      '敏感细腻，能感知主人情绪变化',
      '需要定期护肤，皮肤护理不能少',
    ],
    strengths: ['情感细腻', '体贴入微', '聪明敏感', '独特的美', '专一的感情'],
    weaknesses: ['皮肤敏感', '怕冷怕晒', '需要特殊护理', '容易焦虑'],
    lifestyle: ['需要恒温环境', '定期护肤', '喜欢依偎取暖', '对材质敏感'],
    relationships: ['深情且专一', '需要伴侣的陪伴', '能感知你的情绪', '不喜欢独处'],
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80',
    compatibleWith: ['M7', 'M2'],
    compatibleReason: 'M7暹罗猫和你一样情感细腻，能深刻理解彼此的需求；M2布偶猫的温柔与你的深情相呼应。你们都是有"温度"的猫咪，在一起互相取暖。',
  },
  {
    id: 'M13',
    name: '阿比西尼亚猫',
    tags: ['优雅', '活泼', '亲人', '好奇'],
    description: '你是猫中精灵——阿比西尼亚猫。你拥有优雅的体态和活泼的性格，是猫界的"万人迷"。你好奇活泼，喜欢参与家里的一切事务。你和谁都处得来，是社交达人。你是猫咪界的"名媛"，走到哪里都是焦点。',
    personality: [
      '优雅与活泼并存，很会拿捏分寸',
      '亲人友好，喜欢和人互动',
      '好奇心旺盛，喜欢探索',
      '聪明伶俐，学东西很快',
    ],
    strengths: ['社交能力强', '学习能力', '优雅气质', '适应力好', '情商高'],
    weaknesses: ['需要大量关注', '好奇心强容易惹祸', '不喜欢被冷落', '有时过于活跃'],
    lifestyle: ['喜欢参与一切', '需要互动玩具', '喜欢爬高', '每天都充满活力'],
    relationships: ['自来熟', '喜欢交朋友', '讨厌被忽视', '需要伴侣有耐心'],
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    compatibleWith: ['M10', 'M15'],
    compatibleReason: 'M10橘猫的随和让你的活泼有释放空间；M15折耳猫的安静能平衡你的活跃，你们在一起是"动静结合"的完美组合。',
  },
  {
    id: 'M14',
    name: '孟加拉猫',
    tags: ['野性', '敏捷', '自信', '调皮'],
    description: '你是猫中猛兽——孟加拉猫。你身上留着野性的血液，拥有酷似豹子的花纹和敏捷的身姿。你自信满满，对一切充满掌控欲。你是真正的探险家，家里的每个角落都要留下你的印记。你是"野性美"的最佳代表。',
    personality: [
      '野性十足，保留了部分野生动物的本能',
      '运动能力超强，擅长各种极限运动',
      '自信霸气，天不怕地不怕',
      '调皮捣蛋，精力需要大量消耗',
    ],
    strengths: ['运动天赋', '野性魅力', '自信果敢', '适应力强', '独特的美'],
    weaknesses: ['过于活跃', '需要大量运动', '可能具有破坏性', '不太适合室内'],
    lifestyle: ['每天需要大量运动', '喜欢游泳', '需要空间释放精力', '对玩具要求高'],
    relationships: ['喜欢主导', '需要有趣的伴侣', '讨厌无聊', '自信但不自私'],
    imageUrl: 'https://images.unsplash.com/photo-1606208427126-a8f5cd7cd0fd?w=800&q=80',
    compatibleWith: ['M3', 'M5'],
    compatibleReason: 'M3狸花猫和M5美短都是"动派"，与你的野性精力完美匹配。你们三个组成的"活力联盟"，每天都在家里开运动会。',
  },
  {
    id: 'M15',
    name: '折耳猫',
    tags: ['安静', '陪伴', '温柔', '乖巧'],
    description: '你是猫中乖宝——折耳猫。你安静、温柔、乖巧，是理想的陪伴型猫咪。你不喜欢吵闹，更喜欢安安静静地待在主人身边。你用陪伴诠释最长情的告白。你的折耳是可爱的标志，也是你温柔天性的象征。',
    personality: [
      '性格安静，很少吵闹',
      '温柔乖巧，善解人意',
      '喜欢陪伴，不喜欢独处',
      '对主人忠诚，默默守候',
    ],
    strengths: ['温柔体贴', '安静不闹', '善于陪伴', '乖巧听话', '情绪稳定'],
    weaknesses: ['体质较弱', '容易生病', '过于依赖', '需要细心照顾'],
    lifestyle: ['喜欢安静陪伴', '不需要大量运动', '定期需要检查', '喜欢被抱着'],
    relationships: ['默默陪伴型', '不争不抢', '需要伴侣细心', '全心信任主人'],
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef32ce6?w=800&q=80',
    compatibleWith: ['M13', 'M2'],
    compatibleReason: 'M13阿比西尼亚猫的活泼能带动你；M2布偶猫的温柔与你的乖巧相得益彰。你们都是有"温度"的猫咪，在一起时，世界都安静美好了。',
  },
  {
    id: 'M16',
    name: '俄罗斯蓝猫',
    tags: ['神秘', '优雅', '慢热', '忠诚'],
    description: '你是猫中贵族——俄罗斯蓝猫。你拥有独特的蓝灰色被毛和绿色的眼眸，气质高贵而神秘。你是慢热型选手，对陌生人保持距离，但一旦和你成为朋友，你就会是最忠诚的伙伴。你是"高冷外表下藏着深情"的典型代表。',
    personality: [
      '神秘优雅，让人捉摸不透',
      '慢热型，需要时间建立信任',
      '对主人忠诚，但表达方式含蓄',
      '喜欢安静的环境，有自己的生活节奏',
    ],
    strengths: ['神秘魅力', '忠诚度高', '情绪稳定', '安静不闹', '有品位'],
    weaknesses: ['慢热难以接近', '不善于表达', '容易记仇', '对变化适应慢'],
    lifestyle: ['喜欢安静的环境', '有自己的作息规律', '对陌生人警惕', '需要时间适应新事物'],
    relationships: ['择友严格', '一旦认定了就很忠诚', '表达含蓄但行动证明', '讨厌虚伪'],
    imageUrl: 'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?w=800&q=80',
    compatibleWith: ['M1', 'M8'],
    compatibleReason: 'M1狮子猫和M8波斯猫与你的贵族气质相投，你们都是"不轻易爱人"的类型，一旦相处起来却意外地和谐，是"惺惺相惜"的关系。',
  },
];

// 计算每个维度的百分比得分（相对于最大可能值）
export function calculateDimensionPercentages(scores: ScoreType): Record<string, number> {
  // 每个维度的最大可能值：18道题，每题最高3分
  const maxScores = { activity: 24, social: 24, curiosity: 24, emotion: 24, territory: 24, adapt: 24 };
  
  return {
    activity: Math.round((scores.activity / maxScores.activity) * 100),
    social: Math.round((scores.social / maxScores.social) * 100),
    curiosity: Math.round((scores.curiosity / maxScores.curiosity) * 100),
    emotion: Math.round((scores.emotion / maxScores.emotion) * 100),
    territory: Math.round((scores.territory / maxScores.territory) * 100),
    adapt: Math.round((scores.adapt / maxScores.adapt) * 100),
  };
}

export function calculateCatType(scores: ScoreType): CatType {
  const { activity, social, curiosity, emotion, territory, adapt } = scores;
  
  // 计算各个维度的高低
  const activityLevel = activity >= 18 ? 'high' : activity >= 10 ? 'medium' : 'low';
  const socialLevel = social >= 18 ? 'high' : social >= 10 ? 'medium' : 'low';
  const curiosityLevel = curiosity >= 18 ? 'high' : curiosity >= 10 ? 'medium' : 'low';
  const emotionLevel = emotion >= 18 ? 'high' : emotion >= 10 ? 'medium' : 'low';
  
  // 简单加权计算最终类型
  let mIndex = 0;
  if (activityLevel === 'high') mIndex += 8;
  if (socialLevel === 'high') mIndex += 4;
  if (curiosityLevel === 'high') mIndex += 2;
  if (emotionLevel === 'high') mIndex += 1;
  
  // 根据索引选择猫咪类型
  const catIndex = mIndex % 16;
  return catTypes[catIndex];
}

export function getCatById(id: string): CatType | undefined {
  return catTypes.find(cat => cat.id === id);
}
