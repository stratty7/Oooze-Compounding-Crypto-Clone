// SPDX-License-Identifier: MIT

/*
 ______   ______   ______   ______    
/\  __ \ /\  __ \ /\___  \ /\  ___\   
\ \ \/\ \\ \ \/\ \\/_/  /__\ \  __\   
 \ \_____\\ \_____\ /\_____\\ \_____\ 
  \/_____/ \/_____/ \/_____/ \/_____/ 
                                                          
Ooze - Evmos Miner
*/

library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the substraction of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {trySub}.
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting with custom message when dividing by zero.
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {tryMod}.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}

pragma solidity 0.8.9;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
    * @dev Initializes the contract setting the deployer as the initial owner.
    */
    constructor () {
      address msgSender = _msgSender();
      _owner = msgSender;
      emit OwnershipTransferred(address(0), msgSender);
    }

    /**
    * @dev Returns the address of the current owner.
    */
    function owner() public view returns (address) {
      return _owner;
    }

    
    modifier onlyOwner() {
      require(_owner == _msgSender(), "Ownable: caller is not the owner");
      _;
    }

    function renounceOwnership() public onlyOwner {
      emit OwnershipTransferred(_owner, address(0));
      _owner = address(0);
    }

    function transferOwnership(address newOwner) public onlyOwner {
      _transferOwnership(newOwner);
    }

    function _transferOwnership(address newOwner) internal {
      require(newOwner != address(0), "Ownable: new owner is the zero address");
      emit OwnershipTransferred(_owner, newOwner);
      _owner = newOwner;
    }
}

contract Ooze is Context, Ownable {
    using SafeMath for uint256;

    uint256 private constant DEPOSIT_MAX_AMOUNT = 200 ether;
    uint256 private OOZE_TO_CREATE_1MINERS = 1080000;//for final version should be seconds in a day
    uint256 private PSN = 10000;
    uint256 private PSNH = 5000;
    uint256 private BOOST_PERCENT = 20;
    uint256 private BOOST_CHANCE = 35;
    uint256 private devFeeVal = 8;
    bool private initialized = false;
    address payable private recAdd;
    mapping (address => uint256) private hatcheryMiners;
    mapping (address => uint256) private claimedOoze;
    mapping (address => uint256) private lastHatch;
    mapping (address => address) private referrals;
    uint256 private oozeBarreled;
    uint256 private participants;
    uint256 private marketOoze;
    uint256 private timesBarrelled;
    
    constructor() {
        recAdd = payable(msg.sender);
    }

    event RewardsBoosted(address indexed adr, uint256 boosted);

    function getBoost(uint256 amount) private view returns (uint256) {
        return SafeMath.div(SafeMath.mul(amount, BOOST_PERCENT), 100);
    }
    
    function barrelOoze(address ref, bool isRehire) public {
        require(initialized);
        
        if(ref == msg.sender) {
            ref = address(0);
        }
        
        if(referrals[msg.sender] == address(0) && referrals[msg.sender] != msg.sender) {
            referrals[msg.sender] = ref;
        }

        
        uint256 oozeUsed = getMyOoze(msg.sender);
        uint256 newMiners = SafeMath.div(oozeUsed,OOZE_TO_CREATE_1MINERS);

        // check if boost
        if (isRehire && random() <= BOOST_CHANCE) {
            uint256 boosted = getBoost(newMiners);
            newMiners = SafeMath.add(newMiners, boosted);
            emit RewardsBoosted(msg.sender, boosted);
        }
        if (hatcheryMiners[msg.sender] == 0) {
            participants++;
        }
        hatcheryMiners[msg.sender] = SafeMath.add(hatcheryMiners[msg.sender],newMiners);
        claimedOoze[msg.sender] = 0;
        lastHatch[msg.sender] = block.timestamp;
        
        //send referral Ooze
        claimedOoze[referrals[msg.sender]] = SafeMath.add(claimedOoze[referrals[msg.sender]],SafeMath.div(oozeUsed,8));

        timesBarrelled++;
        //boost market to nerf miners hoarding
        marketOoze=SafeMath.add(marketOoze,SafeMath.div(oozeUsed,5));
    }
    
    function sellOoze() public {
        require(initialized);
        uint256 hasOoze = getMyOoze(msg.sender);
        uint256 oozeValue = calculateOozeSell(hasOoze);
        uint256 fee = devFee(oozeValue);
        claimedOoze[msg.sender] = 0;
        lastHatch[msg.sender] = block.timestamp;
        marketOoze = SafeMath.add(marketOoze,hasOoze);
        recAdd.transfer(fee);
        payable (msg.sender).transfer(SafeMath.sub(oozeValue,fee));
    }
    
    function oozeRewards(address adr) public view returns(uint256) {
        uint256 hasOoze = getMyOoze(adr);
        uint256 oozeValue = calculateOozeSell(hasOoze);
        return oozeValue;
    }
    
    function buyOoze(address ref) public payable {
        require(initialized);
        require(msg.value <= DEPOSIT_MAX_AMOUNT, 'Maximum deposit amount is 10 Evmos');
        uint256 oozeBought = calculateOozeBuy(msg.value,SafeMath.sub(address(this).balance,msg.value));
        oozeBought = SafeMath.sub(oozeBought,devFee(oozeBought));
        uint256 fee = devFee(msg.value);
        recAdd.transfer(fee);
        claimedOoze[msg.sender] = SafeMath.add(claimedOoze[msg.sender],oozeBought);
        barrelOoze(ref, false);
    }
    
    function calculateTrade(uint256 rt,uint256 rs, uint256 bs) private view returns(uint256) {
        return SafeMath.div(SafeMath.mul(PSN,bs),SafeMath.add(PSNH,SafeMath.div(SafeMath.add(SafeMath.mul(PSN,rs),SafeMath.mul(PSNH,rt)),rt)));
    }
    
    function calculateOozeSell(uint256 ooze) public view returns(uint256) {
        return calculateTrade(ooze,marketOoze,address(this).balance);
    }
    
    function calculateOozeBuy(uint256 eth,uint256 contractBalance) public view returns(uint256) {
        return calculateTrade(eth,contractBalance,marketOoze);
    }
    
    function calculateOozeBuySimple(uint256 eth) public view returns(uint256) {
        return calculateOozeBuy(eth,address(this).balance);
    }
    
    function devFee(uint256 amount) private view returns(uint256) {
        return SafeMath.div(SafeMath.mul(amount,devFeeVal),100);
    }
    
    function seedMarket() public payable onlyOwner {
        require(marketOoze == 0);
        initialized = true;
        marketOoze = 108000000000;
    }
    
    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }

    function getParticipants() public view returns(uint256) {
        return participants;
    }

    function getTimesBarrelled() public view returns(uint256) {
        return timesBarrelled;
    }
    
    function getMyMiners(address adr) public view returns(uint256) {
        return hatcheryMiners[adr];
    }
    
    function getMyOoze(address adr) public view returns(uint256) {
        return SafeMath.add(claimedOoze[adr],getOozeSinceLastHatch(adr));
    }
    
    function getOozeSinceLastHatch(address adr) public view returns(uint256) {
        uint256 secondsPassed=min(OOZE_TO_CREATE_1MINERS,SafeMath.sub(block.timestamp,lastHatch[adr]));
        return SafeMath.mul(secondsPassed,hatcheryMiners[adr]);
    }

    function random() public view returns (uint256) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp))) % 100;
    }
    
    function min(uint256 a, uint256 b) private pure returns (uint256) {
        return a < b ? a : b;
    }

}