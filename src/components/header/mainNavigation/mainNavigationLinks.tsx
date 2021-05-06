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

import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi"

export const mainNavigationLinks = [
  {
    id: 2,
    name: "blog",
    icon: <RiBallPenLine />,
    link: "/blog",
  },
  {
    id: 3,
    name: "about",
    icon: <RiCommunityLine />,
    link: "/about",
  },
  {
    id: 4,
    name: "contact",
    icon: <AiOutlineMail />,
    link: "/contact",
  },
]
