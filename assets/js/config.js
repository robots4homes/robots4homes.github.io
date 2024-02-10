const project_name = `Workshop on Robot Learning For Homes`
const proj_small_caps = `<span class="small-caps">🤖🧠4🏡</span>`
const conference_details = ['RSS 2024', 'https://roboticsconference.org/', 'Delft, Netherlands', 'assets/images/RSS2024_logo.png', 'assets/images/RobotLearningForHomes_Logo.png']
const workshop_date = `TBD, 2024`

const talk_speaker_details = {
  'dh': ['David Hsu', './assets/images/talks/david_hsu.png', 'Professor', 'Department of Computer Science, National University of Singapore', 'https://www.comp.nus.edu.sg/~dyhsu/', ' ', ''],
  'cp': ['Chris Paxton', './assets/images/talks/chris-paxton.jpeg', 'Research Scientist', 'Meta AI', 'https://cpaxton.github.io', 'Towards Home Robots: Open Vocabulary Mobile Manipulation in Unstructured Environments', ''],
  'ra': ['Rika Antonova', './assets/images/talks/rika.jpeg', 'Postdoctoral Researcher', 'Standford', 'https://contactrika.github.io/', 'Efficient Autonomy: Leveraging Equivariance and Rapid Adaptation to Train Versatile Household Robots', ''],
  'pf': ['Mahi Shafiullah', './assets/images/talks/mahi.jpeg', 'PhD Resercher', 'New York University', 'https://mahis.life/', '', ""],
  'ta': ['Tamim Asfour', './assets/images/talks/tamim.jpeg', 'Professor', 'Institute for Anthropomatics and Robotics, KIT', 'https://h2t.iar.kit.edu/english/21_2372.php', 'Engineering Functional Intelligence for 24/7 Assistance at Home', ''],
  'ke': ['Kiana Ehsani', './assets/images/talks/kiana.jpg', 'Research Scientist', 'Allen Institute for AI', 'https://sites.google.com/view/ehsanik-personal-website/', 'From Boxed Bots to Home Robots: Imitate, Generalize, Personalize', ''],
  'ae': ['Aaron Edsinger', './assets/images/talks/aaron.jpg', 'CEO & Co-founder', 'Hello Robot Inc.', 'https://hello-robot.com/about', '', ''],
}

const organizers_details = [
  ['Snehal Jauhri', './assets/images/organizers/snehaljauhri.webp', 'PhD Researcher', 'TU Darmstadt', 'https://pearl-lab.com/people/snehal-jauhri/'],
  ['Georgia Chalvatzaki', './assets/images/organizers/georgia.png', 'Professor', 'TU Darmstadt', 'https://irosalab.com/people/georgia-chalvatzaki/'],
  ['Krishan Rana', './assets/images/organizers/krishan.jpg', 'Postdoctoral Researcher', 'QUT Centre for Robotics', 'https://krishanrana.github.io/'],
  ['Sonia Chernova', './assets/images/organizers/sonia.jpeg', 'Associate Professor', 'Georgia Tech', 'https://faculty.cc.gatech.edu/~chernova/'],
  ['Lerrel Pinto', './assets/images/organizers/lerrel.jpeg', 'Assistant Professor', 'New York University', 'https://www.lerrelpinto.com/'],
]

const accepted_presentations = [
  // ['Jad Abou-Chakra', 'https://au.linkedin.com/in/jadchakra', 'assets/images/ppt-talks/Jad-Abou-Chakra.jpeg', 'PhD Student', 'Queensland University of Technology', 'Physically Embodied Gaussian Splatting: Embedding Physical Priors into a Visual 3D World Model For Robotics', 'Predictive modelling is vital for robotic manipulation, assisting an agent to plan actions to achieve its goals. Many studies have leaned on visual representations like 2d images or 3d neural radiance fields for state representation. However, they often lack the ability to effectively represent and reason over physical phenomena such as gravity, forces, velocities, collisions, or rigidity, limiting interpretability and prediction stability over longer time horizons. We enhance the state representation by combining visual data with explicit physical, structural, and kinematic priors. We forge a connection between a particle-based physics simulator and a visual scene representation that harnesses Gaussian Splatting. Our core innovation is a dual Gaussian-Particle model that facilitates the synthesis of real-world data into a simulation, enabling differentiable parameter updates and integration with a model predictive control pipeline.', 'Spotlight', '9:30 - 9:40'],
  // ['Xingyu Lin', 'https://xingyu-lin.github.io/', 'assets/images/ppt-talks/Xingyu-Lin.png', 'PostDoc', 'University of California, Berkeley', 'Learning Generalizable Visuomotor Skills from Pre-trained Networks', 'The existing internet-scale image and video datasets cover a wide range of everyday objects and tasks, bringing the potential of learning policies that generalize in diverse scenarios. Prior works have explored visual pre-training with different self-supervised objectives. Still, the generalization capabilities of the learned policies and the advantages over well-tuned baselines remain unclear from prior studies. In this work, we present a focused study of the generalization capabilities of the pre-trained visual representations at the categorical level. We identify the key bottleneck in using a frozen pre-trained visual backbone for policy learning and then propose SpawnNet, a novel two-stream architecture that learns to fuse pre-trained multi-layer representations into a separate network to learn a robust policy. Through extensive simulated and real experiments, we show significantly better categorical generalization compared to prior approaches in imitation learning settings.', 'Spotlight', '9:40 - 9:50'],
  // ['Yixuan Huang', 'https://robot-learning.cs.utah.edu/yixuanh', 'assets/images/ppt-talks/Yixuan-Huang.png', 'PhD Student', 'University of Utah', 'Reasoning and Planning about Unobserved Objects with Memory Models', 'Robots need to have a memory of previously observed, but currently occluded objects to work reliably in realistic environments. We investigate the problem of encoding object-oriented memory into a multi-object manipulation reasoning and planning framework. We propose DOOM and LOOM, which leverage transformer relational dynamics to encode the history of trajectories given partial-view point clouds and an object discovery and tracking engine. Our approaches can perform multiple challenging tasks including reasoning with occluded objects, novel objects appearance, and object reappearance. Throughout our extensive simulation and real-world experiments, we find that our approaches perform well in terms of different numbers of objects and different numbers of distractor actions.', 'Spotlight', '9:50 - 10:00'],
  // ['Carolina Higuera', 'https://carolinahiguera.github.io/', 'assets/images/ppt-talks/Carolina-Higuera.png', 'PhD Student', 'University of Washington', 'Perceiving Extrinsic Contacts from Touch Improves Learning Insertion Policies', 'Robotic manipulation tasks such as object insertion typically involve interactions between object and environment, namely extrinsic contacts. Prior work on Neural Contact Fields (NCF) use intrinsic tactile sensing between gripper and object to estimate extrinsic contacts in simulation. However, its effectiveness and utility in real-world tasks remain unknown. In this work, we improve NCF to enable sim-to-real transfer and use it to train policies for mug-in-cupholder and bowl-in-dishrack insertion tasks. We find our model NCF-v2, is capable of estimating extrinsic contacts in the real-world. Furthermore, our insertion policy with NCF-v2 outperforms policies without it, achieving 33% higher success and 1.36x faster execution on mug-in-cupholder, and 13% higher success and 1.27x faster execution on bowl-in-dishrack.', 'Spotlight', '10:00 - 10:10'],
  // ['Kushal Kedia', 'https://kushal2000.github.io/', 'assets/images/ppt-talks/Kushal-Kedia.png', 'PhD Student', 'Cornell University', 'What will the Human and Robot Do? Modeling Human Intent for Collaborative Manipulation', "In collaborative human-robot manipulation, a robot must predict human intents and adapt its actions accordingly to smoothly execute tasks. However, the human's intent, in turn, depends on the actions the robot takes, creating a chicken-or-egg problem. Prior methods ignore such inter-dependency and train marginal intent prediction models independent of robot actions. This is because training conditional models is hard given a lack of paired human-robot interaction datasets. Can we instead leverage large-scale human-human interaction data that is more easily accessible? Our key insight is to exploit a correspondence between human and robot actions that enables transfer learning from human-human to human-robot data. We propose a novel architecture, InteRACT, that pre-trains a conditional intent prediction model on large human-human datasets and fine-tunes on a small human-robot dataset. We evaluate our intent predictor on a set of real-world collaborative human-robot manipulation tasks and show that our conditional model improves over various marginal baselines. We also introduce new techniques to tele-operate a 7-DoF robot arm and collect a diverse range of human-robot collaborative manipulation data.", 'Spotlight', '10:10 - 10:20'],
  // ['Stanley Lewis', 'https://www.linkedin.com/in/stanlew7531', 'assets/images/ppt-talks/Stanley-Lewis.jpg', 'PhD Student', 'University of Michigan', "Inverting the Design of Everyday Things: Affordances, Signifiers and Why Objects Should See and Robots Should Do", "Roboticists have long aspired to create robots capable of autonomously executing manipulation tasks using natural language instructions. However, integrating language into physical tasks remains a challenging research area. We propose a new conceptualization of this problem, akin to inverting the industrial design problem as explored by Don Norman. Humans rely on object signifiers, communicated via an object’s geometry or texture, to effectively map their actions to affordances. For instance, a horizontal crash bar on a door signal where to push. These inherent object signifiers suggest that manipulation should primarily depend on object appearance and observed object-object interactions. By conditioning manipulations on neural radiance field representations of relevant objects in the scene, we can subsequently establish object-centric way fields for desired object motion in a given task. This approach allows for a separation between the challenging language-driven task and the more well-understood motion-planning problem.", 'Spotlight', '10:20 - 10:30'],
  // ['Sudeep Dasari', 'https://sudeepdasari.github.io/', 'assets/images/ppt-talks/Sudeep-Dasari.png', 'PhD Student', 'Carnegie Mellon University', 'An Unbiased Look at Datasets for Visuo-Motor Pre-Training', 'Dense visual correspondence plays a vital role in robotic perception. This work focuses on establishing the dense correspondence between a pair of images that captures dynamic scenes undergoing substantial transformations. We introduce Doduo to learn general dense visual correspondence from in-the-wild images and videos without ground truth supervision. Given a pair of images, it estimates the dense flow field encoding the displacement of each pixel in one image to its corresponding pixel in the other image. Doduo uses flow-based warping to acquire supervisory signals for the training. Incorporating semantic priors with self-supervised flow training, Doduo produces accurate dense correspondence robust to the dynamic changes of the scenes. Trained on an in-the-wild video dataset, Doduo illustrates superior performance on point-level correspondence estimation over existing self-supervised correspondence learning baselines. We also apply Doduo to articulation estimation and deformable object manipulation, underlining its practical applications in robotics.', 'Spotlight', '14:30 - 14:40'],
  // ['Shuo Cheng', 'https://sites.google.com/view/shuocheng', 'assets/images/ppt-talks/Shuo-Cheng.jpg', 'PhD Student', 'Georgia Institute of Technology', 'Scalable and Generalizable Robot Skill Representations for Long-horizon Manipulation', 'Unlocking the potential of robots in everyday environments presents numerous applications. However, daily tasks are characterized by long horizons, diverse geometries, and configurations, posing challenges for scalability and generalizability in existing paradigms. This presentation explores novel representations and systems for scalable, generalizable skill acquisition and coordination, enabling robots to tackle complex, long-term tasks effectively and robustly.', 'Spotlight', '14:40 - 14:50'],
  // ['Ankit Goyal', 'https://imankgoyal.github.io/', 'assets/images/ppt-talks/Ankit-Goyal.png', 'Research Scientist', 'NVIDIA', 'RVT: Robotic View Transformer for 3D Object Manipulation', 'For 3D object manipulation, methods that build an explicit 3D representation perform better than those relying only on camera images. But using explicit 3D representations like voxels comes at large computing cost, adversely affecting scalability. Ee propose RVT, a multi-view transformer for 3D manipulation that is both scalable and accurate. Some key features of RVT are an attention mechanism to aggregate information across views and re-rendering of the camera input from virtual views around the robot workspace. In simulations, we find that a single RVT model works well across 18 RLBench tasks with 249 task variations, achieving 26% higher relative success than the existing state-of-the-art method (PerAct). It also trains 36X faster than PerAct for achieving the same performance and achieves 2.3X the inference speed of PerAct. Further, RVT can perform a variety of manipulation tasks in the real world with just a few (∼10) demonstrations per task.', 'Spotlight', '14:50 - 15:00'],
  // ['Zhenyu Jiang', 'https://zhenyujiang.me/', 'assets/images/ppt-talks/Zhenyu-Jiang.jpg', 'PhD Student', 'The University of Texas at Austin', 'Doduo: Dense Visual Correspondence from Unsupervised Semantic-Aware Flow', 'Dense visual correspondence plays a vital role in robotic perception. This work focuses on establishing the dense correspondence between a pair of images that captures dynamic scenes undergoing substantial transformations. We introduce Doduo to learn general dense visual correspondence from in-the-wild images and videos without ground truth supervision. Given a pair of images, it estimates the dense flow field encoding the displacement of each pixel in one image to its corresponding pixel in the other image. Doduo uses flow-based warping to acquire supervisory signals for the training. Incorporating semantic priors with self-supervised flow training, Doduo produces accurate dense correspondence robust to the dynamic changes of the scenes. Trained on an in-the-wild video dataset, Doduo illustrates superior performance on point-level correspondence estimation over existing self-supervised correspondence learning baselines. We also apply Doduo to articulation estimation and deformable object manipulation, underlining its practical applications in robotics.', 'Spotlight', '15:00 - 15:10'],
  // ['Leon Kim', 'https://www.grasp.upenn.edu/people/leon-kim/', 'assets/images/ppt-talks/Leon-Kim.jpg', 'PhD Student', 'University of Pennsylvania', 'Vision-Based Contact Localization Without Touch or Force Sensing', 'Contacts play a critical role in most manipulation tasks. Robots today mainly use proximal touch/force sensors to sense contacts, but the information they provide must be calibrated and is inherently local, with practical applications relying either on extensive surface coverage or restrictive assumptions to resolve ambiguities. We propose a vision-based extrinsic contact localization task: with only a single RGB-D camera view of a robot workspace, identify when and where an object held by the robot contacts the rest of the environment. We show that careful task-attuned design is critical for a neural network trained in simulation to discover solutions that transfer well to a real robot. Our final approach im2contact demonstrates the promise of versatile general-purpose contact perception from vision alone, performing well for localizing various contact types (point, line, or planar; sticking, sliding, or rolling; single or multiple), and even under occlusions in its camera view. ', 'Spotlight', '15:10 - 15:20'],

]

const org_affiliation_logos = [
  'assets/images/affiliation-logos/um-logo.png',
  'assets/images/affiliation-logos/utd-logo.png',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '09:00 - 09:10', 'Introduction'],
  ['inv-talk', '09:10 - 09:40', 'Invited Talk', 'dh', 'in-person'],
  ['inv-talk', '09:40 - 10:10', 'Invited Talk', 'ae', 'in-person'],
  ['spot-ppt', '10:10 - 10:20', 'Spotlight Presentations'],
  ['coffee-break', '10:20 - 11:00', 'Coffee Break & Poster Session'],
  ['inv-talk', '11:00 - 11:30', 'Invited Talk', 'pf', 'in-person'],
  ['panel-disc', '11:30 - 12:00', 'Panel Discussion'],
  ['lunch-break', '12:00 - 13:20', 'Lunch Break'],
  ['spot-ppt', '13:20 - 13:30', 'Spotlight Presentations'],
  ['inv-talk', '13:30 - 14:00', 'Invited Talk', 'cp', 'in-person'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk',  'ra', 'in-person'],
  ['open-disc', '14:30 - 15:00', 'Open Audience Discussion'],
  ['coffee-break', '15:00 - 15:30', 'Coffee Break & Poster Session'],
  // ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'ta', 'online'],
  ['inv-talk', '15:30 - 16:00', 'Invited Talk', 'ta', 'in-person'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'ke', 'in-person'],
  ['panel-disc', '16:30 - 17:00', 'Panel Discussion'],
  ['awards', '17:00 - 17:30', 'Awards & Closing Remarks'], 
]
