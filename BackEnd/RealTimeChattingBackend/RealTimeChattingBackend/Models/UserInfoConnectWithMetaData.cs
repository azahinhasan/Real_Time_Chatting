﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RealTimeChattingBackend.Models.MetaDatas;
using System.ComponentModel.DataAnnotations;


namespace RealTimeChattingBackend.Models
{
    [MetadataType(typeof(UserInfoMetaData))]
    public partial class UserInfo
    {
    }
}