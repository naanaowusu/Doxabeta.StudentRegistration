﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.StudentRegistration
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Student.
    /// </summary>
    // *** Start programmer edit section *** (Student CustomAttributes)

    // *** End programmer edit section *** (Student CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("StudentE", new string[] {
            "Surname as \'Surname\'",
            "Name as \'Name\'",
            "Age as \'Age\'",
            "Gender as \'Gender\'"})]
    [View("StudentL", new string[] {
            "Surname as \'Surname\'",
            "Name as \'Name\'",
            "Age as \'Age\'",
            "Gender as \'Gender\'"})]
    public class Student : ICSSoft.STORMNET.DataObject
    {
        
        private string fSurname;
        
        private string fName;
        
        private int fAge;
        
        private IIS.StudentRegistration.tGender fGender;
        
        // *** Start programmer edit section *** (Student CustomMembers)

        // *** End programmer edit section *** (Student CustomMembers)

        
        /// <summary>
        /// Surname.
        /// </summary>
        // *** Start programmer edit section *** (Student.Surname CustomAttributes)

        // *** End programmer edit section *** (Student.Surname CustomAttributes)
        [StrLen(255)]
        public virtual string Surname
        {
            get
            {
                // *** Start programmer edit section *** (Student.Surname Get start)

                // *** End programmer edit section *** (Student.Surname Get start)
                string result = this.fSurname;
                // *** Start programmer edit section *** (Student.Surname Get end)

                // *** End programmer edit section *** (Student.Surname Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Student.Surname Set start)

                // *** End programmer edit section *** (Student.Surname Set start)
                this.fSurname = value;
                // *** Start programmer edit section *** (Student.Surname Set end)

                // *** End programmer edit section *** (Student.Surname Set end)
            }
        }
        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Student.Name CustomAttributes)

        // *** End programmer edit section *** (Student.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Student.Name Get start)

                // *** End programmer edit section *** (Student.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Student.Name Get end)

                // *** End programmer edit section *** (Student.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Student.Name Set start)

                // *** End programmer edit section *** (Student.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Student.Name Set end)

                // *** End programmer edit section *** (Student.Name Set end)
            }
        }
        
        /// <summary>
        /// Age.
        /// </summary>
        // *** Start programmer edit section *** (Student.Age CustomAttributes)

        // *** End programmer edit section *** (Student.Age CustomAttributes)
        public virtual int Age
        {
            get
            {
                // *** Start programmer edit section *** (Student.Age Get start)

                // *** End programmer edit section *** (Student.Age Get start)
                int result = this.fAge;
                // *** Start programmer edit section *** (Student.Age Get end)

                // *** End programmer edit section *** (Student.Age Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Student.Age Set start)

                // *** End programmer edit section *** (Student.Age Set start)
                this.fAge = value;
                // *** Start programmer edit section *** (Student.Age Set end)

                // *** End programmer edit section *** (Student.Age Set end)
            }
        }
        
        /// <summary>
        /// Gender.
        /// </summary>
        // *** Start programmer edit section *** (Student.Gender CustomAttributes)

        // *** End programmer edit section *** (Student.Gender CustomAttributes)
        public virtual IIS.StudentRegistration.tGender Gender
        {
            get
            {
                // *** Start programmer edit section *** (Student.Gender Get start)

                // *** End programmer edit section *** (Student.Gender Get start)
                IIS.StudentRegistration.tGender result = this.fGender;
                // *** Start programmer edit section *** (Student.Gender Get end)

                // *** End programmer edit section *** (Student.Gender Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Student.Gender Set start)

                // *** End programmer edit section *** (Student.Gender Set start)
                this.fGender = value;
                // *** Start programmer edit section *** (Student.Gender Set end)

                // *** End programmer edit section *** (Student.Gender Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "StudentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View StudentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("StudentE", typeof(IIS.StudentRegistration.Student));
                }
            }
            
            /// <summary>
            /// "StudentL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View StudentL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("StudentL", typeof(IIS.StudentRegistration.Student));
                }
            }
        }
    }
}
