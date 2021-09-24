const CandidateStorage = artifacts.require('CandidateStorage')

contract('Candidate Storage', () => {

    it("can create candidate", async () => {
        const storage = await CandidateStorage.deployed()

        const candidateName = web3.utils.fromAscii("Samuel")
        const candidateParty = web3.utils.fromAscii("PDP")
        const tx = await storage.registerCandidate(candidateName, candidateParty)

        assert.isOk(tx)
    });

    it("can get candidates", async () => {
        const storage = await CandidateStorage.deployed()

        const candidateInfo = await storage.candidates.call(1)
        console.log(candidateInfo)
        const candidateName = web3.utils.toAscii(candidateInfo[1]).replace(/\u0000/g, '')

        assert.equal(candidateName, "Samuel")
    });

})