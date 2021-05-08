import * as React from "react"
import { Fragment } from "react"
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiBarChartHorizontalFill,
  RiCloudLine,
  RiQuestionnaireLine,
  RiBallPenLine,
  RiRotateLockLine,
  RiShoppingCartLine,
  RiGroupLine,
  RiTeamLine,
  RiUserAddLine,
  RiLoginCircleLine,
  RiMoneyEuroBoxLine,
  RiCommunityLine,
  RiLineChartLine,
  RiMailLine,
  RiBriefcaseLine,
  RiLoginBoxLine,
  RiQuestionLine,
  RiPriceTag3Line,
} from "react-icons/ri"

import {
  AiOutlineMail,
  AiOutlineProfile,
  AiOutlineExperiment,
  AiOutlineUser,
} from "react-icons/ai"
import {
  HiOutlineUserAdd,
  HiOutlineUserGroup,
  HiOutlinePresentationChartBar,
  HiOutlineCode,
} from "react-icons/hi"
import { CgProfile } from "react-icons/cg"

export const mainNavigationLinks = [
  {
    id: 5,
    name: "projects",
    icon: <HiOutlineCode />,
    link: "/projects",
  },
  {
    id: 3,
    name: "about",
    icon: <AiOutlineUser />,
    link: "/about",
  },
  {
    id: 2,
    name: "blog",
    icon: <RiBallPenLine />,
    link: "/blog",
  },

  {
    id: 4,
    name: "contact",
    icon: <AiOutlineMail />,
    link: "/contact",
  },
]
