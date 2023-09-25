<template>
    <div>
        <div class="verify-info-box">
            <div class="verify-info-box-title">
                <h3>Verify Your Contact Information</h3>
            </div>
                 <div class="userInfo-area">
            <div>
                <div class="userInfo-area-left">
                    <el-descriptions
                        class="description-form"
                        title="Verify Your Contact Information"
                        :column="1"
                        :size="size"
                        border
                    >
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <user />
                                    </el-icon>
                                    Username
                                 </div>
                            </template>
                                    kooriookami
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <iphone />
                                    </el-icon>
                                    Telephone
                                    </div>
                            </template>
                                    18100000000
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <Location />
                                    </el-icon>
                                    Place
                                </div>
                            </template>
                                     Suzhou
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                 <div class="cell-item">
                                     <el-icon :style="iconStyle">
                                        <tickets />
                                   </el-icon>
                                        Remarks
                                </div>
                            </template>
                                <el-tag size="small">School</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                         <office-building />
                                     </el-icon>
                                    Address
                                </div>
                            </template>
                                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                        </el-descriptions-item>
                    </el-descriptions>
                    <div>
                        <el-checkbox v-model="checked1" label="I certify that the above information is correct." size="large" />
                    </div>
                </div>
                    
            </div>
            
            <div>
                <el-card class="box-card">
                    <h4>
                        ! We must have current contact information, especially your email address. Verify your name and institutional affiliation; make sure that we've segmented your first and last names correctly and that any accented characters are properly represented. Return to the registration form to update your information. If your e-mail address 2116639781@qq.com is no longer valid, then you must change your E-mail address BEFORE proceeding.
                    </h4>
                </el-card>
            </div>

        </div>
        </div>

        <el-divider />
        
        <div class="agree-area">
            <div class="verify-info-box-title">
                <h3>Submission Agreement</h3>
            </div>
            <div>
                <div>
                <p>Read and agree to the full Instructions for Submission (opens in a new tab) before proceeding</p>
                    <el-checkbox  :label="city"><b> I have read and agree to the Instructions for Submission</b></el-checkbox>
            </div>
            <div>
                <p>Read and accept the Submission Terms and Agreement (opens a new window) before proceeding</p>
                <el-checkbox  :label="city"><b> By submitting to arXiv I have read and accept the Submission Terms and Agreement</b></el-checkbox>
                <p>If you are under 18 years of age: Please ask an older co-author to submit the work. If that is not possible you must complete the arXiv parent/guardian consent form before proceeding.</p>
            </div>
            </div>
            
        </div>

        <el-divider />

        <div class="author-area">
            <div class="verify-info-box-title">
                <h3>Authorship</h3>
            </div>
            <el-radio-group v-model="authorshipRadio" class="ml-4">
                <div class="author-radio">
                     <el-radio label="1" size="large"><b>I am submitting as an author of this article</b> </el-radio><br>
                <el-radio label="2" size="large"><b>I am not an author but have obtained pre-authorization from arXiv to submit as a third-party submitter</b></el-radio>
                </div>
               
             </el-radio-group>
        </div>

        <el-divider />

        <div class="license-area">
            <div class="verify-info-box-title">
                <h3>License Statement</h3>
            </div>
            <div>
                 <div>
                <p>All articles and source files posted on arXiv.org can be viewed and downloaded by anyone.</p>
                <p>Please select the license you would like to use to make your content available. Your chosen license is irrevocable. For all licenses here, except CC Zero, the original copyright holder retains ownership after posting on arXiv.</p>
                <p>arXiv encourages open access and a liberal license for re-use of the paper. However, each situation is unique. Funders may require specific licenses. Journals have different policies regarding preprints, accepted manuscripts, embargo periods, and post-publication distribution. Please note that different versions of the work can have different licenses.</p>
            </div>
            <div>
                <p>It is the submitter’s responsibility to choose the appropriate license for their content and ensure that they have the right to submit the content. Need help? See License Information.</p>
                <div>
                    <el-radio-group v-model="licenseRadio" class="ml-4">
                         <div class="author-radio">
                            <el-radio label="1" size="large"><el-link type="primary"><b>CC BY: Creative Commons Attribution </b></el-link> </el-radio><br>
                            <el-radio label="2" size="large"><el-link type="primary"><b>CC BY-SA: Creative Commons Attribution-ShareAlike </b></el-link> </el-radio>
                            <el-radio label="3" size="large"><el-link type="primary"><b>CC BY-NC-SA: Creative Commons Attribution-Noncommercial-ShareAlike </b></el-link> </el-radio>
                            <el-radio label="4" size="large"><el-link type="primary"><b>CC BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivatives </b></el-link> </el-radio>
                            <el-radio label="5" size="large"><el-link type="primary"><b>arXiv.org perpetual, non-exclusive license </b></el-link> </el-radio>
                            <el-radio label="6" size="large"><el-link type="primary"><b>CC Zero: No Rights Reserved  </b></el-link> </el-radio>
                        </div>
                    </el-radio-group>
                </div>
            </div>
            </div>
           
        </div>

        <el-divider />

        <div class="subject-area">
            <div class="verify-info-box-title">
                <h3>Archive and Subject Class</h3>
            </div>
            <div>
                <div>
                    <p>Please read the category descriptions carefully to ensure you select the best-fitting category for your submission. Failure to do so may significantly delay the listing of your submission, and creates additional work for our volunteer moderators.</p>
                    <p>lijinchao#1 has registered as author to the groups: cs</p>
                    <p>If your desired submission archive does not appear below, or you wish to change any defaults, return to your registration form and make any necessary changes.</p>
                </div>
                <div>
                    <p>Choose a primary classification for this submission:</p>
                    <div>

                        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select v-model="value" class="m-2" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select v-model="value" class="m-2" placeholder="Select" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'
// const radio = ref(3)
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'


// 单选框参数
const authorshipRadio = ref()

const licenseRadio = ref()

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>
<style lang="scss" scoped>
.cell-item {
  display: flex;
  align-items: center;
}
.description-form {
  margin-top: 20px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
  text-align: left;
}

.userInfo-area{
    display: flex;
    justify-content: left;
    align-items: center;
    .userInfo-area-left{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        text-align: left;
    }
}

.verify-info-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;

}
.verify-info-box-title{
        background-color: red;
        height: 2rem;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.agree-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
}

.author-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
}
.author-radio{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
}

.license-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
}


.subject-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
}
</style>